import styled from 'styled-components'

export const Aside = styled.aside`
  background-color: #000;
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: scroll;
  @media (max-width: 768px) {
    overflow-y: auto;
  }
`

export const Main = styled.main`
  background-color: #fff;
  flex: 0 0 70%;
  overflow-y: scroll;
  @media (max-width: 768px) {
    overflow-y: auto;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  overflow: hidden;
  height: 100vh;

  @media (max-width: 768px) {
    display: block;
    overflow-x: hidden;
    overflow-y: auto;
    min-height: 100vh;
  }
`

export const Logo = styled.a`
  max-width: 100px;
  display: block;
  margin: 64px auto;
  height: 68px;
  flex-shrink: 0.00000001;
  & img {
    display: block;
    width: 100%;
  }
`



export const Loading = styled.h1`
  line-height: calc(100vh - 132px);
  width: 100%;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #3a3a3a;
  font-weight: 700;
  font-size: 48px;
`

export const White = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  font-weight: 400;
  font-size: 24px;
`

export const Center  = styled.div`
  text-align: center;
`

export const WhiteButton = styled.button.attrs({
  type: props => props.type || 'button',
  onClick: props => props.onClick || null
})`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-stretch: condensed;
  display: block;
  width: 100%;
  border: 2px solid #fff;
  background-color: #000;
  color: #fff;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 6px;
  cursor: pointer;
  transition: all .2s ease;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`