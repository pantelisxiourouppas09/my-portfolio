export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">
        Hi, I am Pantelis 👋
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-xl">
        I am a front-end developer & UI/UX designer who builds accessible, responsive websites with modern tech like React, Next.js, and Tailwind CSS.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="/projects" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          View Projects
        </a>
        <a href="/about" className="text-black border border-black px-6 py-2 rounded hover:bg-gray-100">
          About Me
        </a>
      </div>
    </main>
  );
}
