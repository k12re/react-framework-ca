import { Link, useNavigate } from "react-router-dom";
import * as Styled from "../../App.styles";

const ProductItem = ({ data }) => {
  const navigate = useNavigate();
  const navigateProduct = () => {
    navigate(`/product/${data.id}`);
  };
  return (
    <Styled.ProductContainer>
      <li key={data.id} onClick={navigateProduct}>
        <h2>{data.title}</h2>
        <img src={data.imageUrl} alt={data.title} />
        <p>{data.description}</p>
        <Styled.Button>
          <Link to={`/product/${data.id}`}>View product</Link>
        </Styled.Button>
      </li>
    </Styled.ProductContainer>
  );
};

export default ProductItem;
