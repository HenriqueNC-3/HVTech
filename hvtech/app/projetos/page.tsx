"use client";

import { useState } from "react";
import Footer from "@/components/diretosautorais";

interface Case {
  title: string;
  summary: string;
  image: string;
}

interface Service {
  title: string;
  description: string;
  explanation: string;
  averageTicket: string;
  image: string;
  cases: Case[];
}

const services: Service[] = [
  {
    title: "Automação Industrial",
    image: "/automacao.jpg",
    description:
      "Projetos para tornar fábricas e linhas de produção mais eficientes através de sensores, controladores lógicos programáveis (CLPs) e sistemas supervisórios.",
    explanation:
      "CLP (Controlador Lógico Programável) é um computador industrial que controla máquinas; sistemas supervisórios (SCADA) permitem visualizar e comandar processos à distância.",
    averageTicket: "R$ 75.000",
    cases: [
      {
        title: "Linha de Montagem Automática",
        image: "/images (3).jpg",
        summary:
          "Implementamos um sistema de visão para separar peças defeituosas, reduzindo retrabalho em 40%.",
      },
      {
        title: "Sistema de Embalagem Inteligente",
        image: "/images (4).jpg",
        summary:
          "Desenvolvemos controladores que ajustam a velocidade de embalo conforme tamanho do produto, aumentando a produtividade.",
      },
      {
        title: "Monitoramento de Falhas com SCADA",
        image: "/images (5).jpg",
        summary:
          "Integramos sensores a um SCADA, que é um sistema de supervisão que permite visualizar e comandar processos à distância, para detectar falhas em tempo real e gerar alertas imediatos. ",
      },
    ],
  },
  {
    title: "Desenvolvimento de Hardware",
    image: "/hardware.jpg",
    description:
      "Criação de placas eletrônicas e dispositivos customizados voltados para Internet das Coisas (IoT) e equipamentos embarcados.",
    explanation:
      "IoT (Internet das Coisas) refere‑se a objetos conectados à internet que trocam dados; 'embarcado' significa que o software roda diretamente no dispositivo, sem um sistema operacional de uso geral.",
    averageTicket: "R$ 45.000",
    cases: [
      {
        title: "Placa IoT para Monitoramento",
        image: "/images (6).jpg",
        summary:
          "Desenvolvemos um dispositivo que monitora temperatura e envia alertas via SMS para fazendas.",
      },
      {
        title: "Dispositivo USB Customizado",
        image: "/images (7).jpg",
        summary:
          "Criamos um dongle USB para coletar dados de sensores e replicar via rede para sistema central.",
      },
      {
        title: "Módulo Sensor de Umidade",
        image: "/images (8).jpg",
        summary:
          "Projetamos um módulo compacto que mede umidade e envia dados via LoRa, ou seja usando comunicação sem fio de baixo consumo, para aplicações agrícolas.",
      },
    ],
  },
  {
    title: "Consultoria e Suporte Técnico",
    image: "/consultoria.jpg",
    description:
      "Análise de instalações, treinamento de equipes e atendimento remoto ou in‑loco para minimizar tempos de parada.",
    explanation:
      "Tempo de parada é o período em que uma máquina fica parada por falha ou manutenção; suporte 'in‑loco' significa atendimento presencial.",
    averageTicket: "R$ 12.000",
    cases: [
      {
        title: "Treinamento de Operadores",
        image: "/images (9).jpg",
        summary:
          "Capacitamos 50 colaboradores em operação de novos CLPs, agilizando a integração de uma nova linha.",
      },
      {
        title: "Análise de Torque em Máquina",
        image: "/images (10).jpg",
        summary:
          "Realizamos auditoria de torque e calibramos equipamentos para reduzir quebras de ferramentas.",
      },
      {
        title: "Suporte 24/7 para Sistema de Controle",
        image: "/images (5).jpg",
        summary:
          "Oferecemos atendimento contínuo e correções remotas que diminuíram o tempo médio de resposta em 60%.",
      },
    ],
  },
];

function ServiceBlock({ service }: { service: Service }) {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % service.cases.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + service.cases.length) % service.cases.length);

  return (
    <div className="bg-[#1C2541] p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-2 text-center">{service.title}</h3>
      <div className="mb-4 flex justify-center">
        <img
          src={service.image}
          alt={service.title}
          className="h-48 w-48 object-cover rounded-lg"
        />
      </div>
      <p className="mb-1 text-center">{service.description}</p>
      <p className="italic text-sm mb-1 text-center">Glossário:</p>
      <p className="text-sm mb-2 text-center">{service.explanation}</p>
      <p className="font-medium mb-4 text-center">
        Ticket médio: {service.averageTicket}
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-2 text-center">Cases de Sucesso</h4>
        <div className="relative max-w-md mx-auto">
          <div className="bg-[#0B132B] p-6 rounded-lg">
            <div className="mb-4 flex justify-center">
              <img
                src={service.cases[current].image}
                alt={service.cases[current].title}
                className="h-40 w-40 object-cover rounded-lg"
              />
            </div>
            <h5 className="text-2xl font-bold mb-2 text-center">
              {service.cases[current].title}
            </h5>
            <p className="text-center">{service.cases[current].summary}</p>
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
    <div className="min-h-screen bg-[#0B132B] text-[#E0E1DD] font-sans">
      <style>{`
        @keyframes zoomIn {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.05);
          }
        }
        .header-background {
          animation: zoomIn 1.5s ease-out forwards;
        }
      `}</style>

      <div
        className="relative h-96 w-full overflow-hidden mb-12"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 19, 43, 0.75), rgba(11, 19, 43, 0.75)), url('/thumb_projetos.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="header-background absolute inset-0 bg-cover bg-center" />
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-6xl font-bold text-center text-[#E0E1DD] drop-shadow-lg">
            Nossos serviços
          </h1>
        </div>
      </div>

      <section className="p-8">
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Esses são os serviços no qual trabalhamos, com o objetivo de entregar soluções tecnológicas eficientes e inovadoras para nossos clientes, além disso mostramos os nossos melhores cases de sucesso.</h2>
          <div className="space-y-8">
            {services.map((s, i) => (
              <ServiceBlock key={i} service={s} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
