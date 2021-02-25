import instance from "./instance";

// ACTION TYPES
import * as types from "./types";
// ACTIONS

//------------------------------FETCHING FROM BACKEND
export const fetchSession = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/sessions");
      dispatch({
        type: types.FETCH_SESSION,
        payload: response.data,
      });
    } catch (err) {
      console.error();
    }
  };
};

//------------------------------ADDING

export const addSession = (newSession) => {
  const formData = new FormData();
  for (const key in newSession) formData.append(key, newSession[key]);
  return async (dispatch) => {
    try {
      await instance.post(`"/sessions/${newSession.id}"`, formData);
      dispatch({
        type: types.ADD_SESSION,
        payload: { newSession },
      });
    } catch (error) {}
  };
};
//------------------------------DELETING
export const deleteSession = (sessionId) => {
  return async (dispatch) => {
    try {
      await instance.delete(`"/sessions/${sessionId}"`);
      dispatch({
        type: types.DELETE_SESSION,
        payload: { sessionId: sessionId },
      });
    } catch (err) {}
  };
};

//------------------------------UPDATING
export const updateSession = (updatedSession) => {
  const formData = new FormData();
  for (const key in updatedSession) formData.append(key, updatedSession[key]);
  return async (dispatch) => {
    try {
      await instance.put(`"/sessions/${updatedSession.id}"`, formData);
      dispatch({
        type: types.UPDATE_SESSION,
        payload: { updatedSession },
      });
    } catch (error) {}
  };
};
