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
      <body className='flex flex-col justify-start'>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
