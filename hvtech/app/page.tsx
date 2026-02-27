import Image from "next/image";
import Footer from "@/components/diretosautorais";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B132B] font-sans">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-4xl font-bold mb-4 text-[#0B132B]">Welcome to HVTech</h1>
          <p className="text-lg mb-6 text-gray-700">Your one-stop solution for all your tech needs.</p>
          
          <Image
            src="/hvtech-logo.png"
            alt="HVTech Logo"
            width={200}
            height={200}
            className="mx-auto mb-6"
          />

          <div className="flex gap-4 justify-center">
            <a
              href="#"
              className="bg-[#0B132B] text-white px-6 py-3 rounded-full hover:bg-[#1C2541] transition-colors"
            >
              Get Started
            </a>
            <a
              href="/projetos"
              className="bg-[#00B4D8] text-[#0B132B] px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-semibold"
            >
              Nossos Projetos
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}