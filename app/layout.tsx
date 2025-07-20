import { ThemeProviderWrapper } from '@/components/theme-provider-wrapper';
import '@primer/primitives/dist/css/functional/themes/light.css';
import { BaseStyles, ThemeProvider } from '@primer/react';
import '@primer/react-brand/lib/css/main.css';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quack",
  description: "Mande mensagens para as pessoas que você ama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body>
        <ThemeProvider>
          <BaseStyles>
            <ThemeProviderWrapper>
                {children}
            </ThemeProviderWrapper>
          </BaseStyles>
        </ThemeProvider>
      </body>
    </html>
  );
}
