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

  console.log(data);

  return (
    <div>
      <div>
        <Styled.ProductContainer>
          <h2>{data.title}</h2>
          <img src={data.imageUrl} alt={data.title} />
          <p>{data.description}</p>
          <p>Ordinary Price: {data.price}</p>
          {data.discountedPrice !== data.price && (
            <p>Discounted Price: {data.discountedPrice}</p>
          )}
          <p>Rating: {data.rating}</p>
          <AddToCart data={data} />
        </Styled.ProductContainer>
      </div>
    </div>
  );
}

export default ProductPage;
