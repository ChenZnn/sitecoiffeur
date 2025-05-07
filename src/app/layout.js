import './globals.css'
import Footer from './components/Footer'

export const metadata = {
  title: 'Salon de Coiffure',
  description: 'Votre salon de coiffure professionnel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
