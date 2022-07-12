import * as React from "react";
import Link from "next/link";

import { Container, Logo, Tooltip } from "./WppGroup.styles";

export function WppGroup() {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <Container>
      <Logo
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Link
          href="https://chat.whatsapp.com/Ev8eRRahpplB7sjl1phe6C"
          passHref={true}
        >
          <a target="_blank" rel="noopener noreferrer" />
        </Link>
      </Logo>

      <Tooltip show={showTooltip}>
        <p>Caso necessário, acesse nosso grupo no WhatsApp 🌷</p>
      </Tooltip>
    </Container>
  );
}
