/* eslint-disable prettier/prettier */
import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './ApiAction';


const apiActionCreator = url => dispatch => {
  dispatch(fetchData());
  return new Promise(() => {
    axios
      .get(url)
      .then(response => {
         const data = response.data.message;
        dispatch(fetchSuccess(Object.keys(data).map(breed => ({ name: breed, subBreeds: data[breed] }))));
      })
      .catch(error => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export default apiActionCreator;
