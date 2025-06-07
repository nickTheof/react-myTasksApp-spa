import Header from './Header'
import Footer from './Footer'
import type {LayoutProps} from "../types.ts";

const Layout = ({children} : LayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout;