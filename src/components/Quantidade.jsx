import React from 'react';

export default function Quantidade({ amount, setQuantidade }) {
  return (
    <label className="block text-stone-300 font-normal mb-4">
      Quantidade de perfis (1 - 100):
      <input
        type="number"
        value={amount}
        onChange={(e) => setQuantidade(e.target.value)}
        min={1}
        max={100}
        className="ml-6 justify-center rounded-md px-4  h-10 w-20 focus:border-0 focus:font-medium border-stone-600 focus:outline-0 outline-0 bg-zinc-800/50 focus:bg-zinc-700"
      />
    </label>
  );
}