import "../app/_styles/globals.css";

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / FilmFussion",
    default: "Welcome / FilmFussion",
  },
  description: "Your ultimate movie experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
