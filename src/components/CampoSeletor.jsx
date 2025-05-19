import React from 'react';

export default function CampoSeletor({camposDisponiveis = [], 
  selecionados,
  alternarCampo
}) {
  return (
    <div className="flex flex-wrap gap-3 pb-6 pt-3">
      {camposDisponiveis.map((type) => (
        <button
          key={type}
          onClick={() => alternarCampo(type)}
          className={`hover:bg-stone-900 bg-zinc-900 active:bg-stone-800 font-medium text-md cursor-pointer h-12 px-6 uppercase rounded-lg ${
            selecionados.includes(type)
              ? 'hover:bg-orange-900 bg-orange-800 bg-gradient-to-r from-orange-500 to-orange-400  text-white'
              : 'font-medium border-t-1 border-zinc-700 hover:text-stone-400 text-stone-100'
          }`}
        >
          {type[0].toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}