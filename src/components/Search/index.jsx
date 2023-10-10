import { useState } from "react";
import * as Styled from "../../App.styles";
import { Link } from "react-router-dom";

export function Search(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchResults([]);
    const results = props.data.filter((item) => {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    props.setSearchResults(results);
  };

  return (
    <div>
      <Styled.SearchFormContainer>
        <form id="search-form" onKeyUp={handleSearch}>
          <label htmlFor="search"></label>
          <input
            name="search"
            id="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </form>
      </Styled.SearchFormContainer>
      <Styled.FlexWrapper>
        {searchResults.map((item) => (
          <Styled.ProductContainer key={item.id}>
            <li>
              <h2>{item.title}</h2>
              <img src={item.imageUrl} alt={item.title} />
              <p>{item.description}</p>
              <Styled.Button>
                <Link to={`/product/${item.id}`}>View product</Link>
              </Styled.Button>
            </li>
          </Styled.ProductContainer>
        ))}
      </Styled.FlexWrapper>
    </div>
  );
}
