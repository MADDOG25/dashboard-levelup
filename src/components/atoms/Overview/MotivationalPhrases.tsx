import { useState, useEffect } from "react";

const defaultPhrases = [
  "Te conviertes en lo que piensas la mayor parte del tiempo. - Napoleon Hill",
  "Mi cerebro se fortalece todos los dias porque lo ejercito y cuanto mas fuerte se hace mas dinero puedo producir. - Robert Kiyosaki",
  "Lo que la mente del hombre puede concebir y crear es lo que la mente del hombre puede lograr. - Napoleon Hill",
  "La vida es lo que sucede mientras estás ocupado haciendo otros planes. - John Lennon",
  "El éxito es caminar de fracaso en fracaso sin perder el entusiasmo. - Winston Churchill",
  "La felicidad no es algo hecho. Proviene de tus propias acciones. - Dalai Lama",
];

export default function MotivationalPhrases() {
  //Estado de la frase
  const [phrase, setPhrase] = useState("Cargando frase del dia");

  //Efecto que recorre las frases de manera aleatoria
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * defaultPhrases.length);
    setPhrase(defaultPhrases[randomIndex]);
  }, []);

  return (
    <div className="bg-[--colorBlue2] text-[--colorWhite] grid items-center justify-center text-center font-semibold  mx-w-lg m-6 p-4 rounded-2xl">
      <p className="text-xl">{phrase}</p>
    </div>
  );
}
