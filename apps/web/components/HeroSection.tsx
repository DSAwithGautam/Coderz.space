import { HeroSectionProps } from "@/types";

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-white px-4 py-20 text-center dark:bg-black">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.14),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0),rgba(124,58,237,0.05))] dark:bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.2),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0),rgba(88,28,135,0.14))]" />
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8">
        <div className="flex max-w-3xl flex-col items-center">
          <p className="mb-4 rounded-full border border-purple-200 bg-purple-50 px-4 py-1 text-sm font-medium text-purple-700 dark:border-purple-800 dark:bg-purple-950/40 dark:text-purple-300">
            Peer learning for serious DSA practice
          </p>
          <h1 className="mb-5 text-4xl font-bold text-purple-800 sm:text-5xl dark:text-purple-300">
            Welcome to Algo Buddy
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg dark:text-gray-300">
            A collaborative platform where developers master DSA and tech stacks through peer learning, problem-solving, and real progress tracking.
          </p>
          <button
            onClick={onGetStarted}
            className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
          >
            Get Started
          </button>
        </div>

        <div className="grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-lg border border-purple-100 bg-white/80 text-left shadow-xl shadow-purple-900/5 backdrop-blur sm:grid-cols-3 dark:border-purple-900/70 dark:bg-gray-950/80">
          {[
            ["01", "Choose your role", "Mentor and mentee paths stay focused from the first click."],
            ["02", "Practice with structure", "Assignments and sheets keep daily progress visible."],
            ["03", "Track real growth", "Profiles and leaderboards make outcomes easy to scan."],
          ].map(([step, title, text]) => (
            <div key={step} className="border-b border-purple-100 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 dark:border-purple-900/70">
              <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">{step}</p>
              <h2 className="mt-2 text-base font-semibold text-gray-950 dark:text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
