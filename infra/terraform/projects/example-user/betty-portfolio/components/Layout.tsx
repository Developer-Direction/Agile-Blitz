import NavBar from './NavBar';
import { ReactNode } from 'react';


interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
  
    return (
        <>    
            <NavBar />
            <main>{children}</main>    
        </>
    )
  }