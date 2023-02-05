import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className='max-w-4xl container mx-auto'>
      <Component {...pageProps} />
    </div>
  )
}
