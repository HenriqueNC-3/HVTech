"use client";

import { useState } from "react";

const services = [
  {
    title: "Automação Industrial",
    description:
      "Projetos para tornar fábricas e linhas de produção mais eficientes através de sensores, controladores lógicos programáveis (CLPs) e sistemas supervisórios.",
    explanation:
      "CLP (Controlador Lógico Programável) é um computador industrial que controla máquinas; sistemas supervisórios (SCADA) permitem visualizar e comandar processos à distância.",
    averageTicket: "R$ 75.000",
    cases: [
      {
        title: "Linha de Montagem Automática",
        summary:
          "Implementamos um sistema de visão para separar peças defeituosas, reduzindo retrabalho em 40%.",
      },
      {
        title: "Sistema de Embalagem Inteligente",
        summary:
          "Desenvolvemos controladores que ajustam a velocidade de embalo conforme tamanho do produto, aumentando a produtividade.",
      },
      {
        title: "Monitoramento de Falhas com SCADA",
        summary:
          "Integramos sensores a um SCADA para detectar falhas em tempo real e gerar alertas imediatos. ",
      },
    ],
  },
  {
    title: "Desenvolvimento de Hardware",
    description:
      "Criação de placas eletrônicas e dispositivos customizados voltados para Internet das Coisas (IoT) e equipamentos embarcados.",
    explanation:
      "IoT (Internet das Coisas) refere‑se a objetos conectados à internet que trocam dados; 'embarcado' significa que o software roda diretamente no dispositivo, sem um sistema operacional de uso geral.",
    averageTicket: "R$ 45.000",
    cases: [
      {
        title: "Placa IoT para Monitoramento",
        summary:
          "Desenvolvemos um dispositivo que monitora temperatura e envia alertas via SMS para fazendas.",
      },
      {
        title: "Dispositivo USB Customizado",
        summary:
          "Criamos um dongle USB para coletar dados de sensores e replicar via rede para sistema central.",
      },
      {
        title: "Módulo Sensor de Umidade",
        summary:
          "Projetamos um módulo compacto que mede umidade e envia dados via LoRa para aplicações agrícolas.",
      },
    ],
  },
  {
    title: "Consultoria e Suporte Técnico",
    description:
      "Análise de instalações, treinamento de equipes e atendimento remoto ou in‑loco para minimizar tempos de parada.",
    explanation:
      "Tempo de parada é o período em que uma máquina fica parada por falha ou manutenção; suporte 'in‑loco' significa atendimento presencial.",
    averageTicket: "R$ 12.000",
    cases: [
      {
        title: "Treinamento de Operadores",
        summary:
          "Capacitamos 50 colaboradores em operação de novos CLPs, agilizando a integração de uma nova linha.",
      },
      {
        title: "Análise de Torque em Máquina",
        summary:
          "Realizamos auditoria de torque e calibramos equipamentos para reduzir quebras de ferramentas.",
      },
      {
        title: "Suporte 24/7 para Sistema de Controle",
        summary:
          "Oferecemos atendimento contínuo e correções remotas que diminuíram o tempo médio de resposta em 60%.",
      },
    ],
  },
];

function ServiceBlock({ service }) {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % service.cases.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + service.cases.length) % service.cases.length);

  return (
    <div className="bg-[#1C2541] p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
      <p className="mb-1">{service.description}</p>
      <p className="italic text-sm mb-1">Termo difícil:</p>
      <p className="text-sm mb-2">{service.explanation}</p>
      <p className="font-medium mb-4">
        Ticket médio: {service.averageTicket}
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-2">Cases de Sucesso</h4>
        <div className="relative max-w-md mx-auto">
          <div className="bg-[#0B132B] p-6 rounded-lg">
            <h5 className="text-2xl font-bold mb-2">
              {service.cases[current].title}
            </h5>
            <p>{service.cases[current].summary}</p>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#00B4D8] text-[#0B132B] p-2 rounded-full hover:opacity-90"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#00B4D8] text-[#0B132B] p-2 rounded-full hover:opacity-90"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0B132B] text-[#E0E1DD] font-sans p-8">
      <h1 className="text-5xl font-bold text-center mb-12">
        Projetos da HV Tech
      </h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Nossos Serviços</h2>
        <div className="space-y-8">
          {services.map((s, i) => (
            <ServiceBlock key={i} service={s} />
          ))}
        </div>
      </section>
    </div>
  );
}
