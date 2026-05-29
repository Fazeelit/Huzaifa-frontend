// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Huzaifa_Autos Feroza",
  description: "Huzaifa_Autos Feroza - Auto Parts Sales System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
