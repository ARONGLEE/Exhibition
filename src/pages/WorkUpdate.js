import React from "react";
import axios from "axios";

import { Button, Grid, Input, Image } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/artist";
import { actionCreators as imageActions } from "../redux/modules/image";

const WorkUpdate = (props) => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  const work_list = useSelector((state) => state.work.list);
  const { history } = props;

  const [content, setContent] = React.useState({
    workTitle: "",
    workDesc: "",
    workSize: "",
    workMatarial: "",
    workMade: "",
  });

  const work_id = props.match.params.id;
  let _post = work_list.find((p) => p.id === work_id);

  console.log(_post);

  // React.useEffect(() => {
  //   dispatch(imageActions.setPreview(_post.image_url));
  // }, []);

  //input태그 포커스 작업
  const fileInput = React.useRef();

  //파일 미리보기
  const filePreview = () => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log(reader.result);
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  //수정 버튼 눌렀을 때 실행되는 함수
  const editWork = () => {
    dispatch(postActions.editWorkDB(work_id, { content: content }));
  };

  return (
    <React.Fragment>
      <React.Fragment>
        <Grid width="450px" margin="100px auto">
          <Grid margin="10px 0px" center>
            <label htmlFor="fileUpload">
              <Image
                shape="rectangle"
                src={preview ? preview : "http://via.placeholder.com/400x300"}
                width="330px"
              />
            </label>
            <input
              type="file"
              ref={fileInput}
              onChange={filePreview}
              id="fileUpload"
            />
          </Grid>
          <Grid center>
            <Input
              margin="10px 0px"
              placeholder="제목"
              _onChange={(e) => {
                setContent({ ...content, workTitle: e.target.value });
              }}
            />
            <Input
              margin="10px 0px"
              placeholder="설명"
              _onChange={(e) => {
                setContent({ ...content, workDesc: e.target.value });
              }}
            />
            <Input
              margin="10px 0px"
              placeholder="크기"
              _onChange={(e) => {
                setContent({ ...content, workSize: e.target.value });
              }}
            />
            <Input
              margin="10px 0px"
              placeholder="재료"
              _onChange={(e) => {
                setContent({ ...content, workMatarial: e.target.value });
              }}
            />
            <Input
              margin="10px 0px"
              placeholder="제작년도"
              _onChange={(e) => {
                setContent({ ...content, workMade: e.target.value });
              }}
            />
          </Grid>
          <Grid center>
            <Button padding="10px" width="80px" _onClick={editWork}>
              수정완료
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </React.Fragment>
  );
};

export default WorkUpdate;
