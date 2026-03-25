export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start text-center sm:text-left">
        <h1 className="max-w-md text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Welcome to ServiceSwift
        </h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Building something amazing today.
        </p>
      </main>
    </div>
  );
}
