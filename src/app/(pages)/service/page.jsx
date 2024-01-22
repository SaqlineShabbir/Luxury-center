import Services from '../../components/services/Services';
import Footer from '../../components/shared/Footer';
import NavBar from '../../components/shared/Navbar';
import MaxWidthWrapper from '../../lib/MaxWidthWrapper';

const Service = () => {
    return (
        <main>
            < NavBar />
            <MaxWidthWrapper>
                <Services />
            </MaxWidthWrapper>
            <Footer />
        </main >
    )
}

export default Service