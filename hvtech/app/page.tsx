import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B132B] font-sans text-gray-900">
      <div className="text-center bg-[#FFFFFF] p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-[#E0E1DD]">Welcome to HVTech</h1>
        <p className="text-lg mb-6">Your one-stop solution for all your tech needs.</p>
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
            className="inline-block bg-[#0B132B] text-white px-6 py-3 rounded-full hover:bg-[#1C2541] transition-colors duration-300"
          >
            Get Started
          </a>
          <a
            href="/projetos"
            className="inline-block bg-[#00B4D8] text-[#0B132B] px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-300 font-semibold"
          >
            Nossos Projetos
          </a>
        </div>
      </div>
    </div>
  );
}
