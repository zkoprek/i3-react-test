import React from "react";
import Data from '../data.json'

export default function Home(props) {
    const content = (
        Data.map(post =>{
            return (
                <div key={post.img} className={post.class}>
                    <img className="dataImg" src={post.img}></img>
                    <div>{post.text}</div>
                </div>
            )
        })
    )

    const [imgIndex, setShowIndex] = React.useState(0);

    function subtract () {
        setShowIndex(imgIndex-1)
    }

    function add () {
        setShowIndex(imgIndex+1)
    }
    
    var dots = []
    for (var i=0; i<content.length; i++) {
        if (i == imgIndex) {
            dots.push (
                <span className="coloredDot">&#8226;</span>
            )
        } else {
            dots.push (
                <span>&#8226;</span>
            )
        }
    }

    var leftArrow = ""
    if (imgIndex == 1 || imgIndex == 2) 
    leftArrow = (<p id="leftArr" className="arrowLeft" onClick={subtract}>&#60;</p>)
    else leftArrow = null

    var rightArrow = ""
    if (imgIndex == 0 || imgIndex == 1) rightArrow = (<p id="rightArr" className="arrowRight" onClick={add}>&#62;</p>)
    else rightArrow = null

    return (
        <div className="App">
            <div className="dataDiv">
                {props.width<800 && leftArrow}
                {props.width>800 ? content : content[imgIndex]}
                {props.width<800 && rightArrow}
            </div>
            <div className="dots">
                {props.width<800 && dots}
            </div>
        </div>
    )
}