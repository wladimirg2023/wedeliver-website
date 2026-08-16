/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import{useEffect,useState}from"react";
const links=[["Home","/"],["Our Brands","/brands"],["About Us","/about"],["Partnerships","/partnerships"],["Careers","/careers"],["Contact","/contact"]];
export function Header(){const[open,setOpen]=useState(false),[solid,setSolid]=useState(false);useEffect(()=>{const f=()=>setSolid(location.pathname!=="/"||scrollY>40);f();addEventListener("scroll",f);return()=>removeEventListener("scroll",f)},[]);return <header className={`header ${solid||open?"solid":""}`}><a className="wordmark" href="/">wedeliver</a><nav className={open?"open":""}>{links.map(([n,h])=><a key={h} href={h} onClick={()=>setOpen(false)}>{n}</a>)}<a className="button nav-order" href="/#brands">Order now</a></nav><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}><span/><span/></button></header>}
