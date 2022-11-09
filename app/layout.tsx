import Bottombar from '@components/Bottombar';
import Navbar from '@components/Navbar';
import '@styles/globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className='flex flex-col justify-start overflow-x-hidden'>
        <Navbar />
        {children}
        <Bottombar />
      </body>
    </html>
  );
}
