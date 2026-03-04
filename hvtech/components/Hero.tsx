"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Logo from "@/components/Logo";

export default function Hero() {
  return (
    <section
      className="hero-page relative min-h-[70vh] overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-24"
      aria-label="Página inicial HVTech"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 19, 43, 0.75), rgba(11, 19, 43, 0.75)), url('/thumb_projetos.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
          <AnimatedSection className="flex max-w-xl flex-col items-center text-center md:items-start md:text-left">
            <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#00B4D8] sm:text-sm">
              HVTECH • TECNOLOGIA E INOVAÇÃO
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Engenharia de tecnologia feita para empresas que não podem parar.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#E0E1DD] sm:text-lg">
              A HVTech é uma empresa de tecnologia focada em criar soluções
              robustas, seguras e escaláveis para quem precisa de resultados
              reais, e não apenas mais uma ferramenta.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-start">
              <a
                href="/projetos"
                className="inline-flex items-center justify-center rounded-full bg-[#00B4D8] px-6 py-3 text-sm font-semibold text-[#0B132B] shadow-sm transition-all duration-300 hover:scale-105 hover:opacity-90"
              >
                Ver projetos da HVTech
              </a>
              <a
                href="#historia"
                className="inline-flex items-center justify-center rounded-full border border-[#E0E1DD]/40 px-6 py-3 text-sm font-semibold text-[#E0E1DD] transition-all duration-300 hover:scale-105 hover:bg-white/5"
              >
                Conhecer nossa história
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="flex w-full max-w-sm flex-col items-center md:max-w-md md:items-end"
            delay={0.2}
          >
            <div className="w-full rounded-2xl bg-white/5 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.07] hover:shadow-xl">
              <div className="flex items-center gap-3">
                <Logo size="md" />
                <div>
                  <p className="text-xs text-[#E0E1DD]/80">Apresentação</p>
                  <p className="text-sm font-semibold text-white">
                    Plataforma HVTech para negócios modernos
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-xs text-[#E0E1DD]/80">
                Conectamos pessoas, processos e infraestrutura por meio de
                tecnologia bem arquitetada, com foco em estabilidade, segurança
                e crescimento sustentável.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
