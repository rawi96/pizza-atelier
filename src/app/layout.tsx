import { ApplicationShell } from "@/components/application-shell";
import { UrqlProvider } from "@/providers/urql-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pizza Atelier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-gray-100" lang="en">
      <body className="h-full">
        <UrqlProvider>
          <ApplicationShell>{children}</ApplicationShell>
        </UrqlProvider>
      </body>
    </html>
  );
}
