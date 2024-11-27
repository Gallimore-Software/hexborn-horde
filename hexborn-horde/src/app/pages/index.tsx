import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to Hexborn Horde</h1>
      <p className="text-xl mb-8">
        Talk to the Loa, learn the ranks, and immerse yourself in the tribe's lore, mon!
      </p>
      <div className="flex gap-4">
        <Link href="/chatbot">
          <a className="bg-yellow-500 px-6 py-3 rounded shadow hover:bg-yellow-600">Talk to the Loa</a>
        </Link>
        <Link href="/ranks">
          <a className="bg-yellow-500 px-6 py-3 rounded shadow hover:bg-yellow-600">Ranks</a>
        </Link>
        <Link href="/events">
          <a className="bg-yellow-500 px-6 py-3 rounded shadow hover:bg-yellow-600">Events</a>
        </Link>
      </div>
    </div>
  );
}