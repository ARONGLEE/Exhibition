import React from "react";

// import { useDispatch, useSelector } from "react-redux";

const Upload = (props) => {
  // const dispatch = useDispatch();
  // const fileInput = React.useRef();

  // const selectFile = (e) => {
  //   console.log(e);
  //   console.log(e.target);
  //   console.log(e.target.files[0]);

  //   console.log(fileInput.current.files[0]);

  //   const reader = new FileReader();
  //   const file = fileInput.current.files[0];

  //   reader.readAsDataURL(file);

  //   // reader.onloadend = () => {
  //   //   console.log(reader.result);
  //   //   dispatch(imageActions.setPreview(reader.result));
  //   // };
  // };

  return (
    <React.Fragment>
      <input type="file" />
    </React.Fragment>
  );
};

export default Upload;
