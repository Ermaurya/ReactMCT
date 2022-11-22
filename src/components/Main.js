import { useState, useEffect } from "react";
import axios from 'axios'
import moment from 'moment';


export const Main = () => {
    const [contest, setContest] = useState([]);
    const fetchApi = async () => {
        try {
            const res = await axios("https://kontests.net/api/v1/all");
            const single = res.data
            setContest(single)

            console.log(single)
        } catch (error) {
            console.log(error);
        }

    }
    //    const nav=contest.map((cvalue,i)=>{
    //     return `${Math.floor((cvalue.duration % (3600 * 24)) / 3600)}hr ${Math.floor((cvalue.duration % 3600) / 60)}min`
    //    })
    //    console.log(nav)

    useEffect(() => {
        fetchApi();

    }, []);
    return (
        <div>
            <div className="main_container">
                <div className="data_container">
                    <button>Contest Platform</button>

                    {contest.map((user, ind) => {
                        return (
                            <div className="card" key={ind}>

                                <div className="card_data">
                                    <h4>{user.name}</h4>
                                    <p>Start date : {moment(user.start_time,).format('L')}</p>
                                    <p>Start time : {moment(user.start_time,).format('LTS')}</p>
                                    <p>Site : {user.site}</p>
                                    <p>Duration : {`${Math.floor((user.duration % (3600 * 24)) / 3600)} hours ${Math.floor((user.duration % 3600) / 60)} minutes`}</p>
                                </div>
                                <div className="image">
                                    <a href={user.url} target="_black">

                                        <button>{user.site}</button>
                                        {/* <img alt="" src="https://cdn.iconscout.com/icon/free/png-256/code-forces-3629285-3031869.png"/> */}
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}
