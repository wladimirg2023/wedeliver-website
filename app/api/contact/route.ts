const destination = "contact@wedeliver.ph";
function clean(value: FormDataEntryValue | null, limit = 300) { return String(value ?? "").trim().slice(0, limit); }

export async function POST(request: Request) {
  const form = await request.formData();
  const name = clean(form.get("name"));
  const company = clean(form.get("company"));
  const email = clean(form.get("email"));
  const phone = clean(form.get("phone"));
  const type = clean(form.get("type"));
  const message = clean(form.get("message"), 5000);
  if (!name || !email.includes("@") || message.length < 5) return Response.json({ok:false,error:"Please complete the required fields."},{status:400});
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ok:false,error:"Email delivery is not configured yet."},{status:503});
  const text = [`New ${type || "General Inquiry"} from wedeliver.ph`,"",`Name: ${name}`,`Company: ${company || "—"}`,`Email: ${email}`,`Phone: ${phone || "—"}`,`Inquiry type: ${type || "General Inquiry"}`,"","Message:",message].join("\n");
  const response = await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json","User-Agent":"Wedeliver-Website/1.0"},body:JSON.stringify({from:"Wedeliver Website <website@wedeliver.ph>",to:[destination],reply_to:email,subject:`[Wedeliver Website] ${type || "General Inquiry"} — ${name}`,text})});
  if (!response.ok) { console.error("Contact email delivery failed",response.status); return Response.json({ok:false,error:"We could not send your inquiry. Please try again."},{status:502}); }
  return Response.json({ok:true});
}
