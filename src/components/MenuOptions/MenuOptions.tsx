import * as React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { Container } from "./MenuOptions.styles";

export function MenuOptions() {
  return (
    <Container>
      <div>
        <FaArrowRight size={36} color="#FFFFFF" />
        <Link href="/masterclasses">
          <a>Acessar Masterclasses</a>
        </Link>
      </div>

      <div>
        <FaArrowRight size={36} color="#FFFFFF" />
        <Link href="/sessoes">
          <a>Acessar Sessões Passadas</a>
        </Link>
      </div>

      <div>
        <FaArrowRight size={36} color="#FFFFFF" />
        <Link href="https://downloads.adai.com.br/adesivo_conferencia.pdf">
          <a>Download dos adesivos</a>
        </Link>
      </div>

      {/* <div>
        <FaArrowRight size={36} color="#FFFFFF" />

        <Link href="https://aovivo.movimentoflores.com.br">
          <a>Acessar conferência</a>
        </Link>
      </div> */}
    </Container>
  );
}
