export const getUserProfile = (userId) => {
  console.log(userId);
  return async (dispatch, getState) => {
    /*const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNWNmYWQ4MzkzNTAwMTVlOGM0YTUiLCJpYXQiOjE2NzQ0NjUxMjgsImV4cCI6MTY3NTY3NDcyOH0.w0jJ0XgMxZeslQivku-2ce45Dx9rwGNzfuz2_fesLS8",
      },
    };*/
    if (userId) {
      const res = await fetch(
        `https://hilarious-toothbrush-production.up.railway.app/users/${userId}`
      );
      const userData = await res.json();
      dispatch({
        type: "GET_USER_PROFILE",
        payload: userData,
      });
    } else {
      const res = await fetch(
        `https://hilarious-toothbrush-production.up.railway.app/users/63d14dae49b19c47d1ba1938`
      );
      const userData = await res.json();
      dispatch({
        type: "GET_USER_PROFILE",
        payload: userData,
      });
    }
  };
};
export const newTextArea = (userName) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "GET_NEW_NAME",
      payload: userName,
    });
  };
  console.log(userName);
};
export const newPostAction = (post) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "GET_NEW_POST",
      payload: post,
    });
  };
  console.log(post);
};

export const submitEditProfile = (e, name, surname, title, bio, area, user) => {
  e.preventDefault();

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      surname: surname,
      email: user.email,
      title: title,
      bio: bio,
      area: area,
    }),
  };
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://hilarious-toothbrush-production.up.railway.app/users/${user._id}`,
      options
    );
    console.log(await res.json());

    dispatch(getUserProfile());
  };
};
