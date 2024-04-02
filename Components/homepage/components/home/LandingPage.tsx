import { Container } from "../../components/layout/Container";
import { poppinsBold } from "../../fonts";
import { cn } from "../../lib/utils";
import { type AppProps } from "../../types";
import React from "react";

export default function LandingPage() {
  return (
    <header className="relative mx-auto">
      <Container>
        <div className="grid min-h-[70vh] place-items-center text-white">
          <div
            className={cn(
              "flex w-full max-w-[300px] flex-col place-items-center gap-2",
              "sm:max-w-[500px]",
              "lg:max-w-[700px]"
            )}
          >
            <h2
              className={cn(
                "w-full text-start text-5xl font-extrabold even:text-center",
                "sm:text-center sm:text-8xl",
                "lg:text-start"
              )}
            >
              Team Vibhav
            </h2>
          </div>
        </div>
      </Container>
    </header>
  );
}
  