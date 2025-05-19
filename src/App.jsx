import React, { useState } from 'react';
import Header from './components/Header';
import CampoSeletor from './components/CampoSeletor';
import Quantidade from './components/Quantidade';
import PainelJson from './components/PainelJson';
import { gerarMock } from './services/Api';
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';

const CAMPOS_DISPONIVEIS = ['name', 'email', 'phone', 'age', 'city', 'state'];

export default function App() {
  const [selecionados, setSelecionados] = useState([]);
  const [amount, setAmount] = useState(20);
  const [jsonGerado, setJsonGerado] = useState(null);

  const alternarCampo = (type) => {
    setSelecionados((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const gerarJson = async () => {
    const payload = {
      field: selecionados.map((type) => ({ type })),
      amount: Number(amount),
    };
    try {
      const data = await gerarMock(payload);
      setJsonGerado(data);
    } catch (err) {
      console.error('Erro ao gerar JSON:', err);
      setJsonGerado({ erro: 'Erro ao gerar JSON' });
    }
  };

  return (
    <div className="font-display h-screen bg-gradient-to-bl from-zinc-900 via-stone-950 to-stone-950 flex flex-col md:flex-row items-center gap-20 justify-center p-24">
      <div className='w-96'>
        <Header />
        <CampoSeletor
          camposDisponiveis={CAMPOS_DISPONIVEIS} onClick
          selecionados={selecionados}
          alternarCampo={alternarCampo}
        />
        <Quantidade quantidade={amount} setQuantidade={setAmount} />
        <button
          onClick={gerarJson}
          className="subpixel-antialiased bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-700 text-orange-50 font-medium mt-4 py-2 h-12 rounded-lg w-56 hover:-translate-y-1 transition-all duration-200 text-xl flex items-center justify-evenly px-8 cursor-pointer"
          disabled={selecionados.length === 0}
        >
          Gerar JSON
          <ArrowRightCircleIcon className="h-6 w-6 text-amber-100" />
        </button>

      </div>
      <PainelJson jsonGerado={jsonGerado} />
    </div>
  );
}
