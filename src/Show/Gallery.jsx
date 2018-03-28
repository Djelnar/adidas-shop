import React, { Component } from 'react'
import styled from 'styled-components'
/*  eslint-disable no-magic-numbers */


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
  state = {
    shown: '',
  }

  changeView = (e) => {
    this.setState({
      shown: this.props.pics[e.target.dataset.id],
    })
  }

  render() {
    const { shown } = this.state
    const { pics } = this.props
    const pre = [...new Array(10).keys()]

    return (
      <GalleryDiv>
        <div className="mainview">
          {shown ? <img src={shown.slice(0, -3) + 960} alt="" /> : <PlaceholdImg />}
        </div>
        <ScrollH>
          <div className="imagelist">
            {pics.length
              ? (pics.map((el, idx) => (
                <div key={el} className="item">
                  <img
                    src={el}
                    onClick={this.changeView}
                    data-id={idx}
                    alt=""
                    role='none'
                  />
                </div>
              )))
              : (
                pre.map((el) => (
                  <div key={el} className="item">
                    <PlaceholdImg />
                  </div>
                ))
              )
            }
          </div>
        </ScrollH>
      </GalleryDiv>
    )
  }
}
