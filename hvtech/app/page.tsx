 "use client";

import { useState } from "react";
import Footer from "@/components/diretosautorais";
import Logo from "@/components/Logo";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#0B132B] font-sans text-[#E0E1DD]">
      <header className="border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <Logo size="sm" />
            <span className="text-xl font-semibold text-[#00B4D8] sm:text-2xl">
              HVTech
            </span>
          </a>

          {/* Navegação desktop */}
          <nav className="hidden gap-6 text-sm md:flex">
            <a
              href="#apresentacao"
              className="text-[#E0E1DD]/80 transition-colors duration-300 hover:text-white"
            >
              Sobre
            </a>
            <a
              href="#historia"
              className="text-[#E0E1DD]/80 transition-colors duration-300 hover:text-white"
            >
              História
            </a>
            <a
              href="/projetos"
              className="text-[#E0E1DD]/80 transition-colors duration-300 hover:text-white"
            >
              Projetos
            </a>
          </nav>

          {/* Botão menu mobile */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#E0E1DD] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] md:hidden"
            aria-label="Abrir menu de navegação"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Abrir menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </div>
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <nav className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3 text-sm md:hidden">
            <a
              href="#apresentacao"
              className="px-2 py-1 text-[#E0E1DD]/90 transition-colors duration-200 hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#historia"
              className="px-2 py-1 text-[#E0E1DD]/90 transition-colors duration-200 hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              História
            </a>
            <a
              href="/projetos"
              className="px-2 py-1 text-[#E0E1DD]/90 transition-colors duration-200 hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Projetos
            </a>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* Seção hero */}
        <section className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
              <AnimatedSection className="flex max-w-xl flex-col items-center text-center md:items-start md:text-left">
                <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#00B4D8] sm:text-xs">
                  HVTECH • TECNOLOGIA E INOVAÇÃO
                </p>
                <h1 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                  Engenharia de tecnologia feita para empresas que não podem parar.
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-[#E0E1DD] sm:text-base">
                  A HVTech é uma empresa de tecnologia focada em criar soluções
                  robustas, seguras e escaláveis para quem precisa de resultados
                  reais, e não apenas mais uma ferramenta.
                </p>
                <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:justify-start">
                  <a
                    href="/projetos"
                    className="inline-flex items-center justify-center rounded-full bg-[#00B4D8] px-6 py-2.5 text-sm font-semibold text-[#0B132B] shadow-sm transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    Ver projetos da HVTech
                  </a>
                  <a
                    href="#historia"
                    className="inline-flex items-center justify-center rounded-full border border-[#E0E1DD]/40 px-6 py-2.5 text-sm font-semibold text-[#E0E1DD] transition-all duration-300 hover:scale-105 hover:bg-white/5"
                  >
                    Conhecer nossa história
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection
                className="flex w-full max-w-sm flex-col items-center gap-4 md:max-w-md md:items-end"
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
                    tecnologia bem arquitetada, com foco em estabilidade,
                    segurança e crescimento sustentável.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Apresentação institucional da empresa */}
        <section
          id="apresentacao"
          className="border-t border-white/10 bg-[#0B132B] px-4 py-10 sm:px-6 sm:py-12"
        >
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Quem é a HVTech
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#E0E1DD] sm:text-base">
              A HVTech nasceu com um propósito simples: traduzir desafios
              complexos de tecnologia em soluções claras e confiáveis para
              empresas de todos os portes. Unimos visão de negócio, experiência
              em arquitetura de software e boas práticas de engenharia para
              entregar plataformas que realmente suportam o dia a dia dos
              times.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#E0E1DD] sm:text-base">
              Atuamos desde a concepção de produtos digitais até a sustentação
              de ambientes críticos, passando por automação, observabilidade,
              integrações e modernização de sistemas legados. Cada projeto é
              tratado como uma parceria de longo prazo: crescemos junto com o
              cliente, ajustando a tecnologia ao momento do negócio.
            </p>
            <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
              <AnimatedSection delay={0.1}>
              <div className="rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/8 hover:scale-[1.02]">
                <p className="text-xs font-semibold text-[#00B4D8]">
                  O que entregamos
                </p>
                <p className="mt-2 text-xs text-[#E0E1DD]">
                  Plataformas digitais, APIs, integrações e soluções sob medida
                  para cada realidade.
                </p>
              </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
              <div className="rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/8 hover:scale-[1.02]">
                <p className="text-xs font-semibold text-[#00B4D8]">
                  Como pensamos
                </p>
                <p className="mt-2 text-xs text-[#E0E1DD]">
                  Arquiteturas seguras, escaláveis e observáveis, com foco em
                  simplicidade e clareza.
                </p>
              </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
              <div className="rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/8 hover:scale-[1.02]">
                <p className="text-xs font-semibold text-[#00B4D8]">
                  Para quem fazemos
                </p>
                <p className="mt-2 text-xs text-[#E0E1DD]">
                  Times que precisam de confiança na infraestrutura para poder
                  inovar com velocidade.
                </p>
              </div>
              </AnimatedSection>
            </div>
            </AnimatedSection>
          </div>
        </section>

        {/* História da empresa – narrativa em formato de linha do tempo simples */}
        <section
          id="historia"
          className="border-t border-white/10 bg-[#0B132B] px-4 py-10 sm:px-6 sm:py-12"
        >
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Nossa história
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#E0E1DD] sm:text-base">
              A história da HVTech começou com um incômodo: ver empresas
              dependendo de soluções genéricas que não entendiam o contexto do
              negócio. Profissionais de tecnologia com experiência em diferentes
              setores se uniram para criar uma empresa que ouvisse mais, planejasse
              melhor e entregasse tecnologia realmente aderente à realidade de
              cada cliente.
            </p>

            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.1}>
              <div className="flex flex-col gap-3 rounded-xl p-3 transition-all duration-300 hover:bg-white/5 sm:flex-row">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00B4D8]/20 text-center text-xs font-semibold text-[#00B4D8]">
                  1
                </div>
                <div>
                  <p className="text-sm font-semibold text-white sm:text-base">
                    Fundação e primeiros projetos
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#E0E1DD] sm:text-sm">
                    Nos primeiros anos, a HVTech atuou em projetos enxutos,
                    muitas vezes reestruturando ambientes críticos que haviam
                    crescido sem planejamento. Essa fase consolidou nossa postura
                    de entrar a fundo no contexto do cliente antes de propor
                    qualquer solução.
                  </p>
                </div>
              </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
              <div className="flex flex-col gap-3 rounded-xl p-3 transition-all duration-300 hover:bg-white/5 sm:flex-row">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00B4D8]/20 text-center text-xs font-semibold text-[#00B4D8]">
                  2
                </div>
                <div>
                  <p className="text-sm font-semibold text-white sm:text-base">
                    Crescimento e especialização
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#E0E1DD] sm:text-sm">
                    Com o aumento da demanda, passamos a estruturar squads focados
                    em plataformas digitais, observabilidade, automação e
                    modernização de legado. A empresa se consolidou como parceira
                    estratégica para times que precisavam evoluir a tecnologia sem
                    interromper a operação.
                  </p>
                </div>
              </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
              <div className="flex flex-col gap-3 rounded-xl p-3 transition-all duration-300 hover:bg-white/5 sm:flex-row">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00B4D8]/20 text-center text-xs font-semibold text-[#00B4D8]">
                  3
                </div>
                <div>
                  <p className="text-sm font-semibold text-white sm:text-base">
                    Hoje e os próximos passos
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#E0E1DD] sm:text-sm">
                    Hoje, a HVTech atua como parceira de confiança em projetos
                    que vão de ambientes on-premise a arquiteturas cloud e
                    híbridas. Nosso foco continua o mesmo: usar tecnologia como
                    ferramenta para dar previsibilidade, segurança e espaço para
                    inovação sustentável.
                  </p>
                </div>
              </div>
              </AnimatedSection>
            </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}