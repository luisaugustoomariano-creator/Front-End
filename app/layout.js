export const metadata = {
  title: "Dashboard",
  description: "Trade Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
