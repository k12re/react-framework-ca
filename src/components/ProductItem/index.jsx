import { Link } from "react-router-dom";
import * as Styled from "../../App.styles";

const ProductItem = ({ data }) => {
  return (
    <Styled.ProductContainer>
      <Link to={`/product/${data.id}`}>
        <li key={data.id}>
          <h2>{data.title}</h2>
          <img src={data.imageUrl} alt={data.title} />
          <p>{data.description}</p>
          <Styled.Button>
            <Link to={`/product/${data.id}`}>View product</Link>
          </Styled.Button>
        </li>
      </Link>
    </Styled.ProductContainer>
  );
};

export default ProductItem;
