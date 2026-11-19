import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-semibold">Welcome to the Dashboard</h1>
      <Link className="underline" href="/">
        Back to home
      </Link>
    </main>
  );
}