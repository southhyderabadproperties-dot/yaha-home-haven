import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import villaImage from "@/assets/autumn-villa.jpg";
import clubhouseImage from "@/assets/clubhouse.jpg";
import plotsImage from "@/assets/open-plots.jpg";
import { CtaBand, PageIntro } from "@/components/site-shell";

export const Route = createFileRoute("/blog")({ head: () => ({ meta: [
  { title: "South Hyderabad Property Insights | Blog" }, { name: "description", content: "Market trends, investment guidance and regional development news for property buyers in South Hyderabad." },
  { property: "og:title", content: "South Hyderabad Property Insights" }, { property: "og:description", content: "Clear perspectives on real estate growth across South Hyderabad." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: BlogPage });

const posts = [
  {image:plotsImage,category:"Market outlook",date:"September 18, 2026",title:"Why South Hyderabad’s growth corridors deserve a closer look",text:"Infrastructure, connectivity and planned development are reshaping the region’s property map."},
  {image:villaImage,category:"Buyer’s guide",date:"September 6, 2026",title:"Villa or open plot: choosing around your long-term goals",text:"A practical framework for comparing lifestyle value, flexibility and investment horizon."},
  {image:clubhouseImage,category:"Lifestyle",date:"August 28, 2026",title:"The new role of the clubhouse in premium community living",text:"Why shared spaces have become an essential part of how modern communities are designed."},
];

function BlogPage(){return <><PageIntro eyebrow="Property journal" title="Ideas for making your next move clearer."><p>Local updates, buyer guidance and practical perspectives from South Hyderabad’s evolving property market.</p></PageIntro><section className="section-pad"><div className="page-wrap grid gap-7 md:grid-cols-2 lg:grid-cols-3">{posts.map((post,index)=><article className={index===0?"md:col-span-2 lg:col-span-1":""} key={post.title}><div className="image-card aspect-[9/16]"><img src={post.image} alt="" width={1088} height={1920} loading={index===0?"eager":"lazy"}/></div><div className="pt-6"><div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-widest text-primary"><span>{post.category}</span><span className="flex items-center gap-1 text-muted-foreground"><CalendarDays className="h-3.5 w-3.5"/>{post.date}</span></div><h2 className="mt-4 font-display text-2xl font-extrabold leading-tight">{post.title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{post.text}</p><button className="mt-5 flex items-center gap-2 text-sm font-bold text-primary">Read insight <ArrowUpRight className="h-4 w-4"/></button></div></article>)}</div></section><CtaBand/></>}