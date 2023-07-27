import React from 'react'
import { useLocation } from 'react-router-dom'
import { Description, DetailContainer, DetailImg, DetailPart, DetailTitle, InfoPart } from './Detail.style';
import defaultImg from "../../assets/book.jpg"

const Detail = () => {
  const {state:bookDetail} = useLocation();
  console.log(bookDetail);


  return (
    <DetailContainer>
      <DetailPart>
        <DetailTitle>{bookDetail.volumeInfo.title}</DetailTitle>
        <DetailImg >
          <img src={bookDetail.volumeInfo.imageLinks?.smallThumbnail || defaultImg} alt={bookDetail.volumeInfo.title}  />
          </DetailImg>
        <Description>{bookDetail.volumeInfo.description}</Description>
        <InfoPart></InfoPart>
      </DetailPart>
    </DetailContainer>
  )
}

export default Detail