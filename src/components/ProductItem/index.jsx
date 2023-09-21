import { Link } from "react-router-dom";
import * as Styled from "../../App.styles";

const ProductItem = ({ data }) => {
  return (
    <li key={data.id}>
      <Styled.ProductContainer>
        <h2>{data.title}</h2>
        <img src={data.imageUrl} alt={data.title} />
        <p>{data.description}</p>
        <Styled.Button>
          <Link to={`/product/${data.id}`}>View product</Link>
        </Styled.Button>
      </Styled.ProductContainer>
    </li>
  );
};

export default ProductItem;
