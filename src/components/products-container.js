import './products-container.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import  { useParams, useSearchParams, matchPath } from "react-router-dom";

export const ProductsContainer = () => {
    const [useCardsList, setCardsList] = useState([]);
    let { pageNumber } = useParams(1);
    let [searchParams, setSearchParams] = useSearchParams();
    // let [idParam, setIdParam] = useSearchParams(searchParams.get("id"));

    const fetchData = async (page, idParam) => {
        return new Promise(async (resolve, reject) => {
            axios.get(`https://reqres.in/api/products?page=`+page)
            .then(res => {
                if(idParam === null || idParam === undefined || idParam === NaN)
                    setCardsList(
                        res.data.data.map((item)=>{
                            return ( 
                                <ProductCard id={item.id} name={item.name} year={item.year} color={item.color} key={item.id}/> 
                            );
                        })
                    )
                else
                    setCardsList(
                        res.data.data.map((item)=>{
                            if( parseInt(item.id) == parseInt(idParam) )
                                return ( 
                                    <ProductCard id={item.id} name={item.name} year={item.year} color={item.color} key={item.id}/> 
                                );
                        })
                    )

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
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    useEffect(()=>{
        let idParam = searchParams.get("id");
        fetchData(pageNumber, idParam);
    },[pageNumber, searchParams])

    
    return (
        <div className='cards-container'>
            {useCardsList}
        </div>
    );
}