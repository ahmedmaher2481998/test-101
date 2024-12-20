import Header from '@/app/shared/components/Header';
import Footer from '@/app/shared/components/Footer';
import PlatformWrapper from '@/app/shared/components/PlatformWrapper';

export const metadata = {
  title: 'Next.js App with Platform-Specific Views',
  description: 'A scalable Next.js app for mobile and desktop platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <PlatformWrapper>{children}</PlatformWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
