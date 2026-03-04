"use client";

import Footer from "@/components/diretosautorais";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />

        {/* Apresentação institucional da empresa */}
        <section
          id="apresentacao"
          className="border-t border-white/10 bg-[#0B132B] px-4 py-10 sm:px-6 sm:py-12"
        >
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Quem é a HVTech
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#E0E1DD] sm:text-lg">
              A HVTech nasceu com um propósito simples: traduzir desafios
              complexos de tecnologia em soluções claras e confiáveis para
              empresas de todos os portes. Unimos visão de negócio, experiência
              em arquitetura de software e boas práticas de engenharia para
              entregar plataformas que realmente suportam o dia a dia dos
              times.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#E0E1DD] sm:text-lg">
              Atuamos desde a concepção de produtos digitais até a sustentação
              de ambientes críticos, passando por automação, observabilidade,
              integrações e modernização de sistemas legados. Cada projeto é
              tratado como uma parceria de longo prazo: crescemos junto com o
              cliente, ajustando a tecnologia ao momento do negócio.
            </p>
            <div className="mt-6 grid gap-4 text-base sm:grid-cols-2 lg:grid-cols-3">
              <AnimatedSection delay={0.1}>
              <div className="rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/8 hover:scale-[1.02]">
                <p className="text-sm font-semibold text-[#00B4D8]">
                  O que entregamos
                </p>
                <p className="mt-2 text-sm text-[#E0E1DD]">
                  Plataformas digitais, APIs, integrações e soluções sob medida
                  para cada realidade.
                </p>
              </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
              <div className="rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/8 hover:scale-[1.02]">
                <p className="text-sm font-semibold text-[#00B4D8]">
                  Como pensamos
                </p>
                <p className="mt-2 text-sm text-[#E0E1DD]">
                  Arquiteturas seguras, escaláveis e observáveis, com foco em
                  simplicidade e clareza.
                </p>
              </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
              <div className="rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/8 hover:scale-[1.02]">
                <p className="text-sm font-semibold text-[#00B4D8]">
                  Para quem fazemos
                </p>
                <p className="mt-2 text-sm text-[#E0E1DD]">
                  Times que precisam de confiança na infraestrutura para poder
                  inovar com velocidade.
                </p>
              </div>
              </AnimatedSection>
            </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Serviços */}
        <section
          id="servicos"
          className="border-t border-white/10 bg-[#0B132B] px-4 py-10 sm:px-6 sm:py-12"
        >
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Nossos Serviços
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#E0E1DD] sm:text-lg">
                Oferecemos soluções completas de engenharia de software para transformar sua visão em realidade.
              </p>
              
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatedSection delay={0.1}>
                  <div className="flex flex-col rounded-xl bg-white/5 p-6 transition-all duration-300 hover:bg-white/8 hover:scale-[1.02]">
                    <h3 className="text-lg font-semibold text-[#00B4D8]">
                      Plataformas Digitais
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#E0E1DD]">
                      Desenvolvemos aplicações web e mobile escaláveis, seguras e com excelente experiência do usuário.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <div className="flex flex-col rounded-xl bg-white/5 p-6 transition-all duration-300 hover:bg-white/8 hover:scale-[1.02]">
                    <h3 className="text-lg font-semibold text-[#00B4D8]">
                      APIs e Integrações
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#E0E1DD]">
                      Criamos APIs robustas e integramos sistemas heterogêneos para uma comunicação fluida entre plataformas.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <div className="flex flex-col rounded-xl bg-white/5 p-6 transition-all duration-300 hover:bg-white/8 hover:scale-[1.02]">
                    <h3 className="text-lg font-semibold text-[#00B4D8]">
                      Infraestrutura e DevOps
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#E0E1DD]">
                      Estruturamos ambientes cloud, automação, observabilidade e CI/CD para máxima confiabilidade.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <div className="flex flex-col rounded-xl bg-white/5 p-6 transition-all duration-300 hover:bg-white/8 hover:scale-[1.02]">
                    <h3 className="text-lg font-semibold text-[#00B4D8]">
                      Modernização de Legado
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#E0E1DD]">
                      Transformamos sistemas antigos em arquiteturas modernas, mantendo continuidade operacional.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                  <div className="flex flex-col rounded-xl bg-white/5 p-6 transition-all duration-300 hover:bg-white/8 hover:scale-[1.02]">
                    <h3 className="text-lg font-semibold text-[#00B4D8]">
                      Automação
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#E0E1DD]">
                      Eliminamos processos manuais repetitivos através de robótica e automação inteligente.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.6}>
                  <div className="flex flex-col rounded-xl bg-white/5 p-6 transition-all duration-300 hover:bg-white/8 hover:scale-[1.02]">
                    <h3 className="text-lg font-semibold text-[#00B4D8]">
                      Consultoria Técnica
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#E0E1DD]">
                      Orientamos times na escolha de tecnologias e arquiteturas mais adequadas para seus objetivos.
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
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Nossa história
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#E0E1DD] sm:text-lg">
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
                  <p className="text-lg font-semibold text-white sm:text-xl">
                    Fundação e primeiros projetos
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#E0E1DD] sm:text-base">
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
                  <p className="text-lg font-semibold text-white sm:text-xl">
                    Crescimento e especialização
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#E0E1DD] sm:text-base">
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
                  <p className="text-lg font-semibold text-white sm:text-xl">
                    Hoje e os próximos passos
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#E0E1DD] sm:text-base">
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

        {/* Contato */}
        <section
          id="contato"
          className="border-t border-white/10 bg-[#0B132B] px-4 py-10 sm:px-6 sm:py-12"
        >
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Contato
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[#E0E1DD] sm:text-lg">
                Envie sua mensagem e retornaremos o mais breve possível.
              </p>
              <div className="mt-8 max-w-xl">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}