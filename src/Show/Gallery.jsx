import React, { Component } from 'react'
import styled from 'styled-components'
import { Loading } from './../style'

const GalleryDiv = styled.div`
  margin-top: 10vh;
  overflow-x: hidden;
  & .mainview {
    margin: 0 auto;
    height: 80vh;
    width: 80vh;
    margin-bottom: 6vh;

    & img {
      width: 100%;
      display: block;
    }
  }

  & .imagelist {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    & .item {
      margin: 2vh;
      cursor: pointer;

      &:hover {
        opacity: .7;
      }
    }
  }
`

const ScrollH = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
`

const PlaceholdImg = styled.div`
  width: 100%;
  padding-top: 100%;
  background-color: #ddd;
  display: block;
`

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pics: [],
      shown: ''
    }
  }
  componentDidMount() {
    
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      pics: nextProps.images,
      shown: nextProps.images[0]
    })
  }
  changeView = e => {
    this.setState({
      shown: this.state.pics[e.target.dataset.id]
    })
  }
  render() {
    const { shown, pics } = this.state || null
    const pre = [1,2,3,4,5,6,7,8]
    return (
      <GalleryDiv>
        <div className="mainview">
          { shown ? <img src={ shown.slice(0, -3) + 960 } alt=""/> : <PlaceholdImg /> }
        </div>
        <ScrollH>
        <div className="imagelist">
          { pics.length ?
          (pics.map((el, idx) => {
            return(
              <div key={idx} className="item">
                <img src={el} onClick={this.changeView} data-id={idx} alt=""/>
              </div>
            )
          })) :
          (
            pre.map(el => 
              <div key={el} className="item">
                <PlaceholdImg />
              </div>
            )
          )
          }
        </div>
        </ScrollH>
      </GalleryDiv>
    )
  }
}