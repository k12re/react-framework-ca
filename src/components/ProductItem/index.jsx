import { Link } from "react-router-dom";
import * as Styled from "../../App.styles";

const ProductItem = ({ data }) => {
  return (
    <li key={data.id}>
      <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <Styled.Button>
          <Link to={`/product/${data.id}`}>View product</Link>
        </Styled.Button>
      </div>
    </li>
  );
};

export default ProductItem;
