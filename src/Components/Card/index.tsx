import './styles.css';
import cardImg from '../../assets/car.png';

export default function Card() {

    return (
        <div className="ct-card">
            <div className="ct-card-container">
                <img src={cardImg} alt="Carro" />
                <p>O ronco forte do motor ecoa</p>
            </div>
        </div>
    );
}