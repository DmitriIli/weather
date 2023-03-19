import React from "react";



const Post = ({ responce }) => {
    console.log(responce)
    console.log('post')
    if (responce) {
        let newDate = new Date();
        newDate.setTime(responce.resp.dt * 1000);
        let dateString = newDate.toUTCString();
        console.log(dateString)  
    }


    return (

        <div>
            {responce.city
                ? <div className="post__container">
                    <div className="weather-forecast">
                        <div className="weather-forecast__item">
                            <div className="weather-forecast__item-date">
                                <p>{new Date( responce.resp.dt * 1000).toDateString()}</p>
                            </div>

                            <div className="weather-forecast__item-temp">
                                Температура:{Math.floor(responce.resp.main.temp)} °C
                            </div>
                            <div className="weather-forecast__item-feels_like_temp">
                                Ощущается как:{Math.floor(responce.resp.main.feels_like)} °C
                            </div>
                            <div className="weather-forecast__item-condition">
                                {responce.resp.weather[0].description}
                            </div>
                        </div>
                    </div>
                </div>
                : <div></div>
            }

        </div >
    )
}

export default Post;