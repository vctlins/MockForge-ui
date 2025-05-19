import React from 'react';
import { DocumentDuplicateIcon } from '@heroicons/react/20/solid';
import { DocumentArrowDownIcon } from '@heroicons/react/20/solid';

export default function PainelJson({ jsonGerado }) {
  const copiar = () => {
    if (jsonGerado) {
      navigator.clipboard.writeText(JSON.stringify(jsonGerado, null, 2));
    }
  };

  const baixar = () => {
    if (jsonGerado) {
      const blob = new Blob([JSON.stringify(jsonGerado, null, 2)], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'mock.json';
      link.click();
    }
  };

  return (
    <div className="flex-1 space-y-2">
      <div className='flex justify-between items-center'>
        <h2 className="text-2xl text-stone-200 font-semibold mb-4">Seu JSON</h2>
        <div className="flex gap-3 mb-2">
          <button onClick={copiar} className="flex items-center justify-center bg-zinc-800 border-t border-zinc-600 hover:bg-stone-700 text-white cursor-pointer px-4 h-10 rounded-lg">
            Copiar
            <DocumentDuplicateIcon className='ml-2 h-6 w-6 text-zinc-400' />
          </button>
          <button onClick={baixar} className="flex items-center justify-centerbg-gradient-to-r from-orange-400 bg-orange-600 hover:from-orange-600 hover:bg-orange-800 text-white px-4 h-10 cursor-pointer rounded-lg">
            Fazer download
            <DocumentArrowDownIcon className='ml-2 h-6 w-6 text-amber-100' />
          </button>
        </div>
      </div>
      <div className="border-t border-stone-700 bg-stone-900 text-white p-6 rounded-xl max-h-96 overflow-auto custom-scrollbar">
        <pre className="whitespace-pre-wrap">{jsonGerado ? JSON.stringify(jsonGerado, null, 2) : '// JSON aparecerá aqui'}</pre>
      </div>
    </div>
  );
}
