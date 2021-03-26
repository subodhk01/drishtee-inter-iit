import '../styles/flickity.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/font.css'
import '../styles/globals.css'

import { PageTransition } from 'next-page-transitions'

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <PageTransition timeout={300} classNames="page-transition">
                <Component {...pageProps} key={router.route} />
            </PageTransition>
            <style jsx global>{`
                .page-transition-enter {
                    opacity: 0;
                    transform: translate3d(0, 20px, 0);
                }
                .page-transition-enter-active {
                    opacity: 1;
                    transform: translate3d(0, 0, 0);
                    transition: opacity 300ms, transform 300ms;
                }
                .page-transition-exit {
                    opacity: 1;
                }
                .page-transition-exit-active {
                    opacity: 0;
                }
            `}</style>
        </>
    )
}

export default MyApp
