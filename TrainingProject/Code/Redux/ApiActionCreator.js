import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './ApiAction';

const ApiActionCreator = (url) => (dispatch) => {
  dispatch(fetchData());
  return new Promise(() => {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then((response) => {
        const data = response.data.message
        dispatch(fetchSuccess(Object.keys(data).map(listDogData => ({ name: listDogData,subBreeds: data[listDogData]}))));
      })
      .catch((error) => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export default ApiActionCreator;