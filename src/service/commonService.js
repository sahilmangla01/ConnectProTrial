import {getCounry, getState, showLoading} from '../redux/features/commonSlice';
import axios from 'axios';

const GetCountryService = () => async dispatch => {
  dispatch(showLoading(true));
  await axios
    .get('https://api.countrystatecity.in/v1/countries', {
      headers: {
        'X-CSCAPI-KEY': process.env.COUNTRY_API_KEY,
      },
    })
    .then(res => {
      if (res.status === 200) {
        dispatch(getCounry(res.data));
        dispatch(showLoading(false));
      }
    })
    .catch(error => {
      console.log(error);
    });
};

const GetStateService = data => async dispatch => {
  dispatch(showLoading(true));
  await axios
    .get(`https://api.countrystatecity.in/v1/countries/${data}/states`, {
      headers: {
        'X-CSCAPI-KEY': process.env.COUNTRY_API_KEY,
      },
    })
    .then(res => {
      if (res.status === 200) {
        dispatch(getState(res.data));
        dispatch(showLoading(false));
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export {GetCountryService, GetStateService};
