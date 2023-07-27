import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { HomeContainer, HomeImg, MainContainer } from './Home.style'
import axios from 'axios';
import homeImg from "../../assets/books.jpg"
import Card from '../../components/card/Card';

const Home = () => {
    const apiKey = process.env.REACT_APP_apiKey;

    const [query, setQuery] = useState("");
    const [selectType, setSelectType] = useState("all");
    const [bookData, setBookData] = useState([]);

    const getBooks =async () => {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${apiKey}`
      try {
        let {data} = await axios(url)
        // console.log(data.items);
        setBookData(data.items)
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <HomeContainer>
        <Header setSelectType={setSelectType} setQuery={setQuery} getBooks={getBooks} />

        {!bookData.length ? (
          <HomeImg>
            <img src={homeImg} alt="defaultImg"/>
          </HomeImg>
        ): (
            <MainContainer wrap="wrap">
              {bookData.map((item)=>{
                return(
                  <Card key={item.id} item={item} />
                )
              })}
           
            </MainContainer>
        )}

    </HomeContainer>
  )
}

export default Home