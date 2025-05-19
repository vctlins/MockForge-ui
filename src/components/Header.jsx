import React from 'react';

export default function Header() {
  return (
    <div>
      <h1 className="pb-2 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent text-5xl font-bold">MockForge</h1>
      <p className="text-stone-500 text-md font-light">
        Gerador de dados para desenvolvedores</p>
      <p className="pt-6 text-stone-300 text-lg font-medium">
        Selecione os campos que deseja gerar</p>
    </div>
  );
}
