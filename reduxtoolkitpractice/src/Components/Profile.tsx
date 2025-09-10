import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo } from "../Slice/UserInfoSlice";

const Profile = () => {
  //   type userDataType = { username: string; password: string };
  //   const [userData, setUserData] = useState<userDataType>({ username: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    // setUserData((prev) => ({ ...prev, [name]: value }));
    dispatch(addUserInfo({ [name]: value }));
  };

  const { username, password } = useSelector(
    (state) => state?.userData?.userInfo
  );

  return (
    <div>
      <div className="form-group">
        <label>user name:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Profile;
