import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url } from "../../App";
import * as Styled from "../../App.styles";
import { AddToCart } from "../../App";

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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const review = data.reviews;

  const ordinaryPrice = data.price;
  const discountPrice = data.discountedPrice;

  const priceDiff = ((ordinaryPrice - discountPrice) / ordinaryPrice) * 100;

  console.log(priceDiff);

  return (
    <Styled.FlexWrapper>
      <Styled.ProductContainer>
        <h2>{data.title}</h2>
        <img src={data.imageUrl} alt={data.title} />
        <p>{data.description}</p>
        <p>Ordinary Price: {data.price}</p>
        {data.discountedPrice !== data.price && (
          <p>Discounted Price: {data.discountedPrice}</p>
        )}
        <p>You Save:{priceDiff.toFixed(0)}%</p>
        <p>Rating: {data.rating}</p>
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
