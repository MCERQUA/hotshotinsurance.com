"use client";

import { ShieldCheck } from "lucide-react";
import { WHY_CHOOSE, COPY } from "@/lib/content";
import { FadeIn } from "@/components/animations/FadeIn";

export function WhyChooseUs() {
  return (
    <section id="why" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/why-bg.jpg" alt="" className="w-full h-full object-cover object-center" loading="lazy" aria-hidden="true" />
        <div className="absolute inset-0 bg-espresso/82" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-[0.18em] text-gold">
              <span className="h-px w-8 bg-gold" />{COPY.why.eyebrow}
            </span>
            <h2 className="mt-3 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1]">
              {COPY.why.h2Lead} <span className="text-gold">{COPY.why.h2Highlight}</span>.
            </h2>
            <p className="mt-4 text-lg text-cream/85 leading-relaxed">{COPY.why.lead}</p>

            <div className="mt-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-clay-gradient text-white"><ShieldCheck className="h-6 w-6" strokeWidth={2.2} /></span>
                <div>
                  <p className="font-heading font-bold text-white">{COPY.why.sidebarTitle}</p>
                  <p className="text-sm text-cream/75 mt-1 leading-relaxed">{COPY.why.sidebarBody}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {WHY_CHOOSE.map((item, i) => (
              <FadeIn key={item.title} delay={(i % 2) * 0.06}>
                <div className="h-full rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20 text-gold mb-4"><item.icon className="h-6 w-6" strokeWidth={2.2} /></div>
                  <h3 className="font-heading font-bold text-lg text-white leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm text-cream/75 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
