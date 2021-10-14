import React from "react";
import axios from "axios";

import { Button, Grid, Input, Image } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/artist";
import { actionCreators as imageActions } from "../redux/modules/image";

const WorkEdit = (props) => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  const { history } = props;

  //입력 값 저장
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [size, setSize] = React.useState("");
  const [metarial, setMetarial] = React.useState("");
  const [made, setMade] = React.useState("");

  const content = {
    workTitle: title,
    workDesc: desc,
    workSize: size,
    workMetarial: metarial,
    workMade: made,
  };

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

  //작성 버튼 눌렀을 때 실행되는 함수
  const addPost = () => {
    //const file = fileInput.current.files[0];
    let file = document.getElementById("fileUpload").files[0];
    console.log(file);

    //유효성 검사
    if (!file) {
      window.alert("이미지를 업로드해주세요!");
      return;
    }

    //유효성 검사
    if (
      title === "" ||
      desc === "" ||
      size === "" ||
      metarial === "" ||
      made === ""
    ) {
      window.alert("빈칸을 모두 입력해주세요!");
      return;
    }

    //파일 포함한 글작성 데이터 보내는 작업
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "key",
      new Blob([JSON.stringify(content), { type: "application/json" }])
    );
    axios
      .post("work/insert", formData, {
        headers: {
          // "X-AUTH-TOKEN": token,
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(postActions.addWorkDB(content));
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
                setTitle(e.target.value);
              }}
            />
            <Input
              margin="10px 0px"
              placeholder="설명"
              _onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
            <Input
              margin="10px 0px"
              placeholder="크기"
              _onChange={(e) => {
                setSize(e.target.value);
              }}
            />
            <Input
              margin="10px 0px"
              placeholder="재료"
              _onChange={(e) => {
                setMetarial(e.target.value);
              }}
            />
            <Input
              margin="10px 0px"
              placeholder="제작년도"
              _onChange={(e) => {
                setMade(e.target.value);
              }}
            />
          </Grid>
          <Grid center>
            <Button padding="10px" width="80px" _onClick={addPost}>
              포스팅
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </React.Fragment>
  );
};

export default WorkEdit;
