import Navigation from './components/Navigation';
import Logo from './components/Logo';

export const metadata = {
  title: 'The Wild Oasis',
  description: 'Welcome to The Wild Oasis - your luxury getaway destination',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
            <Logo />
            <Navigation />
        </header>
        <main>
            {children}
        </main>
        <footer>
            <p>&copy; 2024 The Wild Oasis. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
