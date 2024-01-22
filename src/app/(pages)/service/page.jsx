import Services from '@/app/components/services/services';
import Footer from '@/app/components/shared/Footer';
import NavBar from '@/app/components/shared/Navbar';
import MaxWidthWrapper from '@/app/lib/MaxWidthWrapper';


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