"use client";
import { useEffect, useState } from "react";
import { Button } from "@/_core/components/fragments/button";

export default function RunPage() {
  const [steps, setSteps] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let lastMagnitude = 0;
    let stepThreshold = 10;

    const handleMotion = (event: any) => {
      const { accelerationIncludingGravity } = event;
      if (accelerationIncludingGravity) {
        const magnitude = Math.sqrt(
          accelerationIncludingGravity.x ** 2 +
            accelerationIncludingGravity.y ** 2 +
            accelerationIncludingGravity.z ** 2
        );

        const delta = magnitude - lastMagnitude;
        if (delta > stepThreshold) setSteps((prevSteps) => prevSteps + 1);

        lastMagnitude = magnitude;
      }
    };

    if (isRunning) {
      window.addEventListener("devicemotion", handleMotion);
    }

    return () => {
      window.removeEventListener("devicemotion", handleMotion);
    };
  }, [isRunning]);

  const toggleCounting = () => {
    setIsRunning(!isRunning);
  };

  const resetSteps = () => {
    setSteps(0);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-background`}
    >
      <div className="bg-secondary p-8  rounded-lg shadow-md">
        <h1 className="">Contador de Passos</h1>
        <h2 className="font-semibolg text-center my-4">{steps}</h2>

        <section className="flex flex-col">
          <Button
            onClick={toggleCounting}
            className={`mb-4 ${isRunning ? "bg-secondary" : "bg-primary"} `}
          >
            {isRunning ? "Parar" : "Iniciar"}
          </Button>
          <Button onClick={resetSteps} variant="destructive">
            Resetar
          </Button>
        </section>
      </div>
    </div>
  );
}
