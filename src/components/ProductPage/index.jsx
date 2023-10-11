import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url } from "../../App";
import * as Styled from "../../App.styles";
import { AddToCart } from "../Cart";

function ProductPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`${url}/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div className="loading"></div>;
  }

  if (isError) {
    return <div className="error">An error occured</div>;
  }

  const review = data.reviews;

  const ordinaryPrice = data.price;
  const discountPrice = data.discountedPrice;
  const priceDiff = ((ordinaryPrice - discountPrice) / ordinaryPrice) * 100;

  return (
    <Styled.FlexWrapper>
      <Styled.ProductContainer>
        <h2>{data.title}</h2>
        <img src={data.imageUrl} alt={data.title} />
        {data.discountedPrice !== data.price && (
          <Styled.Discount>You Save: {priceDiff.toFixed(0)}%</Styled.Discount>
        )}
        <p>{data.description}</p>
        <p>Tags: {data.tags.join(", ")}</p>
        <h3>Price: {data.discountedPrice}</h3>
        <h4>Rating: {data.rating}</h4>
        <AddToCart data={data} />
      </Styled.ProductContainer>
      <Styled.ReviewsContainer>
        <h2>Reviews:</h2>
        {review.length === 0 ? (
          <h3>No reviews</h3>
        ) : (
          review.map((review) =>
            review ? (
              <li key={review.id}>
                <h3>{review.description}</h3>
                <div>Rating: {review.rating}</div>
                <h4>{review.username}</h4>
                <hr />
              </li>
            ) : (
              { review }(<h2>No reviews</h2>)
            )
          )
        )}
      </Styled.ReviewsContainer>
    </Styled.FlexWrapper>
  );
}

export default ProductPage;
