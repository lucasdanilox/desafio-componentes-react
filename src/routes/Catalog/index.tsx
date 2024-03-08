import Card from "../../Components/Card";
import CardComments from "../../Components/CardComments";
import Header from "../../Components/Header";
import './styles.css';

export default function Catalog() {

    return (
        <>
            <Header />
            <h2 className="ct-title-welcome">Venha nos visitar</h2>
            <main className="ct-catalog-main">
                <section id="#ct-catalog-section">
                    <div className="ct-catalog-cards-container">
                        <Card />
                        <Card />
                    </div>
                    <section id="#ct-card-comment">
                        <div className="ct-bg-section-comments">
                        <h3 className="ct-card-comments">O que estão dizendo</h3>
                            <CardComments />
                            <CardComments />
                            <CardComments />
                            <CardComments />
                            <CardComments />
                        </div>
                    </section>

                </section>
            </main>

        </>

    );
}