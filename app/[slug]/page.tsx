/* eslint-disable @next/next/no-html-link-for-pages */
import type {Metadata} from "next";
import Image from "next/image";
import {notFound,redirect} from "next/navigation";
import {ContactForm} from "@/components/ContactForm";
import {KitchenLocationsMap} from "@/components/KitchenLocationsMap";
import {locations} from "@/data/locations";

const content:Record<string,{eyebrow:string,title:string,intro:string,body:string[]}>= {
  about:{eyebrow:"About Wedeliver",title:"ABOUT US",intro:"A Philippine food company focused on creating and operating exceptional delivery-first brands.",body:["We believe quality is the result of disciplined preparation, capable teams and care at every step.","Across our growing kitchen network, we bring the same commitment to every brand and every order."]},
  brands:{eyebrow:"Our brands",title:"We build the food brands of tomorrow.",intro:"Discover My Sushi and Pasta Bella—two food experiences united by quality, care and reliable delivery.",body:[]},
  partnerships:{eyebrow:"Partnerships",title:"Work With WeDeliver",intro:"Whether you’re a company, condominium, hotel, bar or venue, WeDeliver offers simple partnership solutions designed to make ordering great food easier — with special rates, reliable delivery and menus made for sharing.",body:[]},
  careers:{eyebrow:"Careers",title:"Grow with us.",intro:"We’re building food brands people love—and we’re always looking for talented people who want to grow with us.",body:["Roles may include Kitchen Operations, Chefs and Cooks, Customer Service, Marketing, Business Development and Management."]},
  privacy:{eyebrow:"Legal",title:"Privacy Policy",intro:"How Wedeliver handles information submitted through this website.",body:["We collect only the information you choose to provide through our inquiry form and use it to respond to your request.","Contact details and retention information will be updated here before the production form is activated."]},
  terms:{eyebrow:"Legal",title:"Terms & Conditions",intro:"Terms governing use of the Wedeliver corporate website.",body:["This website provides general information about Wedeliver Inc., its brands and partnership opportunities.","Ordering transactions take place on the respective brand websites and are governed by their own terms."]},
};

export function generateStaticParams(){return [...Object.keys(content),"contact","kitchens"].map(slug=>({slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params,c=content[slug];
  if(slug==="kitchens")return {title:"ABOUT US | Wedeliver Inc.",description:content.about.intro};
  return c?{title:`${c.title} | Wedeliver Inc.`,description:c.intro}:{title:"Contact | Wedeliver Inc."};
}

function BrandsPage(){
  return <div className="brand-details">
    <article id="my-sushi" className="brand-detail">
      <div className="brand-detail-heading"><div><p className="eyebrow">Japanese cuisine</p><h2>My Sushi</h2></div></div>
      <p>Premium sushi, sashimi and rolls, prepared fresh daily with carefully selected ingredients and a focus on quality, freshness and precision. From generous cuts of salmon and tuna sashimi to classic nigiri, signature rolls and our popular sushi boxes, every order is crafted to deliver a consistently great Japanese dining experience.</p>
      <div className="brand-gallery"><Image src="/images/brands/mysushi/mixed-nigiri-cali-4.jpg" alt="My Sushi boxes with nigiri and California rolls" width={1080} height={1080}/><Image src="/images/brands/mysushi/mixed-nigiri-cali-3.jpg" alt="My Sushi mixed salmon, tuna and shrimp nigiri" width={1080} height={1080}/><Image src="/images/brands/mysushi/sushi-box-4.jpg" alt="My Sushi premium assorted sushi boxes" width={1200} height={1200}/></div>
      <p>Designed especially for delivery, MySushi combines Japanese craftsmanship with convenience. Whether it’s a quick lunch, dinner at home, an office meeting, a celebration or a large gathering, our menu offers options for every occasion — beautifully prepared, carefully packed and delivered fresh to your door.</p>
      <p>Our philosophy is simple: fresh ingredients, generous portions, precise preparation and reliable delivery — premium sushi made easy to enjoy, wherever you are.</p>
      <a className="button brand-detail-bottom" href="https://mysushi.ph" target="_blank" rel="noreferrer">Order Sushis from MYSUSHI.PH →</a>
    </article>
    <article id="pasta-bella" className="brand-detail">
      <div className="brand-detail-heading"><div><p className="eyebrow">Italian comfort food</p><h2>Pasta Bella</h2></div><a className="button" href="https://pasta.ph" target="_blank" rel="noreferrer">Order pastas on pasta.ph →</a></div>
      <p>Pasta Bella brings comforting traditional Italian favorites straight to your table. From rich, creamy pastas to classic tomato-based recipes and indulgent truffle dishes, every order is freshly prepared with quality ingredients and generous portions. Perfect for an easy meal at home, family gatherings, office lunches, or sharing with friends.</p>
      <div className="brand-gallery pasta-gallery"><Image src="/images/brands/pastabella/arancini.jpeg" alt="Pasta Bella golden arancini" width={1024} height={1024}/><Image src="/images/brands/pastabella/lasagna.jpeg" alt="Pasta Bella baked lasagna" width={1024} height={1024}/><Image src="/images/brands/pastabella/puttanesca-pasta.jpeg" alt="Pasta Bella puttanesca pasta" width={1024} height={1024}/><Image src="/images/brands/pastabella/aglio-e-olio-pasta.jpeg" alt="Pasta Bella aglio e olio pasta" width={1024} height={1024}/></div>
      <a className="button brand-detail-bottom" href="https://pasta.ph" target="_blank" rel="noreferrer">Order pastas on pasta.ph →</a>
    </article>
  </div>;
}

function KitchensSection(){
  return <section id="kitchens" className="about-page-section"><p className="eyebrow">Our kitchens</p><h2>Closer to our customers.</h2><p className="lead">Our multi-brand kitchens serve key areas of Metro Manila efficiently.</p><article className="kitchen-map-card shared-map">
    <div className="kitchen-map-copy"><h2>Our two kitchens</h2><div className="kitchen-location-list">{locations.map(location=><div key={location.name}><h3>{location.name}</h3><p>{location.lines.join(", ")}</p><p>Brands served: My Sushi and Pasta Bella</p></div>)}</div></div>
    <KitchenLocationsMap/>
  </article></section>;
}

function PartnershipsPage(){
  const benefits=["Exclusive employee discount","Special offers for company-wide orders","Easy-to-share boxes and trays","Advance ordering for meetings and events","Reliable scheduled delivery","Direct assistance for larger orders"];
  return <div className="partnerships-page"><p className="partnership-types">Corporate Orders · Condominium Partnerships · Bars &amp; Hotels</p><Image className="partnership-hero-image" src="/images/partnerships/meeting.png" alt="Office team sharing a My Sushi box during a meeting" width={1400} height={1122} priority/><section className="partnership-detail"><p className="eyebrow">Corporate Orders</p><h2>Make office meals and meetings easier.</h2><p>Partner with WeDeliver and give your employees access to exclusive corporate discounts across our food brands.</p><p>For meetings, events, team lunches and celebrations, we offer a selection of ready-to-share sushi boxes, pasta trays and group meals designed to make ordering simple. We coordinate orders in advance and focus on reliable, on-time delivery, so your team can focus on the meeting — not the food.</p><h3>Corporate partners benefit from:</h3><ul>{benefits.map(benefit=><li key={benefit}>{benefit}</li>)}</ul><p>From a small team lunch to a company event, we make corporate food ordering simple.</p></section><section className="partnership-detail"><p className="eyebrow">Condominium Partnerships</p><h2>A food benefit for your residents — with rewards for your building.</h2><p>We partner with condominiums and residential communities to give residents access to exclusive discounts when ordering from participating WeDeliver brands.</p><p>There is no complicated setup for the building administration. We provide the promotional materials and ordering information needed to introduce the offer to residents.</p><p>And we give something back to the people helping make the partnership successful: for every ₱10,000 in orders generated by the building, the administration receives complimentary shareable food from WeDeliver.</p><p>It’s a simple way to add an extra benefit for residents while rewarding the building team.</p></section><section className="partnership-detail"><p className="eyebrow">Hotels &amp; Hospitality · Bars &amp; Venues</p><h2>Add food to your guest experience without operating a kitchen.</h2><p>WeDeliver works with hotels, serviced residences, bars and other hospitality venues that want to offer quality food without having to prepare it themselves.</p><p>Our partners can order from our brands at special net partner prices, then offer the food directly to their guests or customers at their own selling price.</p><p>We take care of the kitchen and preparation; you take care of your guests.</p><p>It’s a flexible solution for room service, bar food, guest requests, events and venues without a full kitchen — with no need to add kitchen staff, equipment or additional food inventory.</p><p>You receive the order. We prepare the food. We deliver. You serve your guests.</p></section><a className="button partnership-contact" href="/contact?subject=partnership">Become a partner →</a></div>;
}

function AboutSections(){
  return <div className="about-page-sections"><KitchensSection/><section className="about-page-section team-section"><p className="eyebrow">Our Team</p><h2>Great food starts with great people.</h2><p>Behind WeDeliver is a passionate team of chefs, kitchen professionals, operations staff and customer service specialists working together every day.</p><p>From sourcing ingredients and preparing each dish to carefully packing orders and coordinating deliveries, every member of our team plays a part in creating a consistent experience for our customers.</p><p>We believe great food starts with great people. That’s why we focus on teamwork, attention to detail and continuous improvement across our kitchens. Our team combines culinary experience with a modern, delivery-first approach, allowing us to serve hundreds of customers while keeping the care and quality of a restaurant kitchen.</p><p>Different roles, different talents, one team — committed to making every order a great one.</p></section><section className="about-page-section news-section"><p className="eyebrow">News</p><article className="news-card"><h2>WeDeliver Opens New Branch on Shaw Boulevard</h2><p className="news-date">August 15, 2026 — Pasig City</p><p>WeDeliver is pleased to announce the opening of its new kitchen on Shaw Boulevard, Pasig, expanding its operations beyond Makati and bringing its food brands closer to more customers across Metro Manila.</p><p>The new location will serve MySushi and Pasta Bella, providing faster and more reliable delivery to Pasig, Mandaluyong and surrounding areas. This opening marks another important step in WeDeliver’s continued growth and expansion.</p></article></section></div>;
}

export default async function Page({params,searchParams}:{params:Promise<{slug:string}>,searchParams:Promise<{subject?:string}>}){
  const {slug}=await params;
  if(slug==="kitchens")redirect("/about#kitchens");
  if(slug==="contact"){
    const query=await searchParams;
    return <main className="inner"><p className="eyebrow">Contact</p><h1>Let’s work together.</h1><p className="lead">Whether you’re looking to place a corporate order, discuss a partnership or learn more about Wedeliver, we’d love to hear from you.</p><ContactForm defaultType={query.subject==="partnership"?"Condominium Partnership":query.subject==="careers"?"Careers":"General Inquiry"}/></main>;
  }
  const page=content[slug];
  if(!page)notFound();
  return <main className={`inner ${slug==="brands"?"brands-page":""}`}><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p className="lead">{page.intro}</p>{page.body.map(text=><p key={text}>{text}</p>)}{slug==="about"&&<AboutSections/>}{slug==="brands"&&<BrandsPage/>}{slug==="partnerships"&&<PartnershipsPage/>}{slug==="careers"&&<a className="button" href="/contact?subject=careers">Send your application →</a>}</main>;
}
