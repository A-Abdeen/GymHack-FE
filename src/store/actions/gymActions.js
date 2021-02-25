import instance from "./instance";

// ACTION TYPES
import * as types from "./types";
// ACTIONS

//------------------------------FETCHING FROM BACKEND
export const fetchGym = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/gyms");
      dispatch({
        type: types.FETCH_GYM,
        payload: response.data,
      });
    } catch (err) {
      console.error();
    }
  };
};

//------------------------------ADDING

export const addGym = (newGym) => {
  const formData = new FormData();
  for (const key in newGym) formData.append(key, newGym[key]);
  return async (dispatch) => {
    try {
      await instance.post(`"/gyms/${newGym.id}"`, formData);
      dispatch({
        type: types.ADD_GYM,
        payload: { newGym },
      });
    } catch (error) {}
  };
};
//------------------------------DELETING
export const deleteGym = (gymId) => {
  return async (dispatch) => {
    try {
      await instance.delete(`"/gyms/${gymId}"`);
      dispatch({
        type: types.DELETE_GYM,
        payload: { gymId: gymId },
      });
    } catch (err) {}
  };
};
