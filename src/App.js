import axios from 'axios';
import React, { useState } from 'react';

const SentimentAnalysis = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Enviando solicitud a la API...');
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english',
        { inputs: text },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Respuesta de la API:', response.data);

      const sentimentResult = response.data[0][0].label;
      setResult(sentimentResult);

      if (sentimentResult === 'NEGATIVE') {
        showNotification();
      }
    } catch (error) {
      console.error('Error en la solicitud:', error.response ? error.response.data : error.message);
    }
  };

  const showNotification = () => {
    if ('Notification' in window && 'serviceWorker' in navigator) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification('¡Ánimo!', {
              body: '¡No te desanimes! Siempre hay algo positivo por descubrir.',
              icon: '/favicon.ico',
            });
          });
        } else {
          console.error('El permiso para notificaciones no ha sido concedido.');
        }
      });
    } else {
      console.error('Notificaciones o Service Worker no están soportados.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-xl p-10 border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Analizador de Sentimientos</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe aquí el texto para analizar"
            rows="6"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition duration-150 ease-in-out"
          >
            Analizar
          </button>
        </form>
        {result && (
          <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md transition-all ease-in-out duration-300">
            <h3 className="text-2xl font-semibold text-gray-700 text-center">Resultado del Análisis:</h3>
            <p className={`text-3xl font-bold mt-4 text-center ${result === 'POSITIVE' ? 'text-green-500' : result === 'NEGATIVE' ? 'text-red-500' : 'text-yellow-500'}`}>
              {result === 'POSITIVE' ? '😊 Positivo' : result === 'NEGATIVE' ? '😟 Negativo' : '😐 Neutral'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SentimentAnalysis;



