import './products-container.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import  { useParams } from "react-router-dom";



{/* <ProductCard id={5} name={"tak"} year={"2007"} color={"yellow"}/> */}

export const ProductsContainer = () => {
    const [useCardsList, setCardsList] = useState([]);
    // let { yes } = useParams();

    const fetchData = async(page) => {
        return new Promise(async (resolve, reject) => {
            axios.get(`https://reqres.in/api/products?page=`+page)
            .then(res => {
                // const persons = res.data;
                // this.setState({ persons });
    
                resolve();
            }).catch(error => {
                reject(error);
            })
        })
    } 
    
    const ProductCard = ({id, name, year, color}) => {
        return (
            <Card style={{ width: '18rem', backgroundColor: color }}>
                <Card.Body>
                    <Card.Title>Item id: {id}</Card.Title>
                    <Card.Text>
                        Name: {name}
                        <br/>
                        year: {year}
                        <br/>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
    
    return (
        <div class="cards-container">
            {useCardsList}
            {/* {yes} */}
        </div>
    );
}