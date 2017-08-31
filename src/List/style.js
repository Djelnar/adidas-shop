import styled from 'styled-components'
import search from './../img/search.svg'
import searchFocused from './../img/search--focused.svg'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Col = styled.div`
  flex: 0 0 33.33333333%;
  padding: 0 10px;
  background-color: ${props => props.bgc || '#fff'};
  margin-bottom: 20px;
  @media (max-width: 1200px) {
    flex: 0 0 50%;
  }
  @media (max-width: 640px) {
    flex: 0 0 100%;
  }
  @media (min-width: 1440px) {
    flex: 0 0 25%;
  }
  @media (min-width: 1920px) {
    flex: 0 0 16.66666667%;
  }
`
export const SearchBar = styled.input.attrs({
  type: 'text'
})`
  border: none;
  outline: none;
  border-bottom: 4px solid #dcdcdc;
  width: calc(100% - 20px);
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  color: #3a3a3a;
  padding: 0 0 8px 55px;
  margin: 1em 10px 2em;
  background: url(${search}) 10px 0 no-repeat;
  transition: all 0.3s ease;
  &::before {
    content: url(${search}) url(${searchFocused});
  }
  &:focus {
    border-color: #373737;
    background: url(${searchFocused}) 10px 0 no-repeat;
  }
`