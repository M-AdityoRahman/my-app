import { useRouter } from "next/router";
import Navbar from "../navbar";

const disableNavbar = ['/auth/login', 'auth/register', '/404'];

type AppshellProps = {
    children: React.ReactNode;
};

const Appshell = ( props : AppshellProps) => {
    const { children } = props;
    const {pathname} = useRouter();
    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
            <footer>
            Footer
        </footer>
        </main>
    );
};

export default Appshell;