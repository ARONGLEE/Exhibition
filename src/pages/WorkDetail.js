import React from "react";
import Work from "../components/Work";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as workActions } from "../redux/modules/work";
import { Grid } from "../elements";

const WorkDetail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const user_info = useSelector((state) => state.user.user);
  console.log(user_info);
  const work_list = useSelector((store) => store.work.list);
  console.log(work_list);
  const work_idx = work_list.findIndex((p) => p.id === id);
  console.log(work_idx);
  const work = work_list[work_idx];
  console.log(work);
  return (
    <React.Fragment>
      <Grid>
        {work && (
          <Work {...work} is_me={work.user_info.user_id === user_info?.uid} />
        )}
        상세페이지
      </Grid>
    </React.Fragment>
  );
};

export default WorkDetail;
