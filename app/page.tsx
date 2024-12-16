"use client";

import { useStore } from "@/stores/useStore";

export default function Home() {
  const { count, increment, reset } = useStore();

  return (
    <main>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </main>
  );
}
