import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import Work from "../components/Work";
import { actionCreators as postActions } from "../redux/modules/work";

const WorkList = (props) => {
    const dispatch = useDispatch();
    const work_list = useSelector((state) => state.work.list);

    console.log(work_list);

    React.useEffect(() => {
        dispatch(postActions.getWorkMiddleware());
    }, []);

    return(
        <React.Fragment>
            <Header/>
            {work_list.map((w, idx) => {
                return <Work key={w.id} {...w}/>
            })}
        </React.Fragment>
    ) 
};

export default WorkList;