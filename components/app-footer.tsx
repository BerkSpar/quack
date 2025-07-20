'use client'

import { Link } from "@primer/react-brand";

export function AppFooter() {
  return (
    <footer>
      Feito com carinho por {' '}

      <Link href="https://www.github.com/berkspar" arrowDirection="none">
        Felipe Passos
      </Link>
    </footer>
  );
}