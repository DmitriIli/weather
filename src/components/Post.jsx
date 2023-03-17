import React from "react";


const Post = ({ responce, city }) => {
    console.log(responce)

    return (

        <div>
            <div className="post__content">
                {city
                    ? < strong > {city}.Погода на сегодня </strong>
                    : <div></div>
            
                }

            </div>

        </div >
    )
}

export default Post;