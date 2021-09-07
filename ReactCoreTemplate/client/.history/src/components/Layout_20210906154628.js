import { Nav } from 'react-bootstrap'
import Header from './Header'
import  NavigationMenu from './NavigationMenu'
const Layout = (children) => {

    return(
        <div>
            <Header />
            <NavigationMenu />
            <div>
                {children}
            </div>
        </div>
    )
}
export default Layout;