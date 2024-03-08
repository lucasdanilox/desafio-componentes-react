import Card from "../../Components/Card";
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
                        <Card/>
                        <Card/>
                    </div>
                </section>
            </main>
            
        </>

    );
}