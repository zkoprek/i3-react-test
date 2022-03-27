import DataBig from '../bigText.json'
import DataTiny from '../tinyText.json'

export default function pageTwo(props) {
    const rightSide = (
        <img className="rightSide" src="comets.jpg"/>
    )

    return (
        <div className="divPageTwo">
            <div className="leftSide">
                {props.width<1040 && rightSide}
                <div className=" fadein1st">
                    <h2>Our Commitment to #BeCrueltyFree</h2>
                    {DataBig.map(post =>{
                        return (
                            <p key={post.id}>{post.paragraph}</p>
                        )
                    })}
                </div>

                <div className="threeImgDiv fadein2nd">
                    {DataTiny.map(post =>{
                        return (
                            <div key={post.firstWord} className={post.class}>
                                <img className="threeImgs " src={post.img}/>
                                <div className="txtThreeImg"><span className="boldTxt">{post.firstWord}</span>{post.text}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {props.width>1040 && rightSide}
            
        </div>
    )
}