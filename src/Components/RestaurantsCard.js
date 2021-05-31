import { Badge } from "react-bootstrap";
import { Card } from "react-bootstrap/Card";

export default function RestaurantsCard ({restaurants}){

    //Obtener promedio de calificaciones

    let sum = 0;
    restaurants.calificaciones.forEach(element => {
        sum += element.score
    });

    const avg = Math.round(sum / (restaurants.calificaciones.length))
    return (

        <Card className="m-3">
            <Card.Body>
                <Card.Title>{restaurants.name}<Badge variant="warning">{avg}</Badge></Card.Title>
            </Card.Body>
        </Card>
    )
}