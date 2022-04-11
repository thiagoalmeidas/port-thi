import Header from '../../components/header';
import Card from '../../components/card';


function Graphics() {
    return (
        <div>
            <Header />
            <section className="wow animate__fadeIn">
                <div className="flex-fill p-5">
                    <div className="card-deck d-flex flex-wrap gap-4 justify-content-center">
                        <Card stackgraphic='Figma - Illustrator - Photoshop' title='Murb' desc='Criação de logotipo em vetor e identidade visual para marca de roupas StreetWear.' image='img/logo-murb.jpg'/>
                        <Card stackgraphic='Figma - Illustrator - Photoshop' title='Vanessa Hair' desc='Criação de logotipo em vetor e identidade visual para salão de caleireiros.' image='img/logo-vanessa.jpg'/>
                        <Card stackgraphic='Figma - Illustrator - Photoshop' title='Comunidade Raizes' desc='Criação de logotipo em vetor e identidade visual para Igreja Comunidade Raizes.' image='img/logo-comunidade-raizes.jpg'/>
                        <Card stackgraphic='Figma - Illustrator - Photoshop' title='Andor Refugiados' desc='Criação de logotipo em vetor e identidade visual para o projeto Andor Refugiados.' image='img/logo-andor.jpg'/>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Graphics;

