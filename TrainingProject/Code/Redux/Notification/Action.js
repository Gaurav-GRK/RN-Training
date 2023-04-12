import * as ActionType from './ActionTypes'
import axios from 'axios'
export const NotificationAction = (userEmail, client, access_token) => {
  return function (dispatch) {
    const headers = {
      uid: userEmail,
      client: client,
      'access-token': access_token
    }
    axios.get('https://qanew.lawclerk.p2klabs.com/api/v1/attorney/notifications', { headers: headers })
      .then(res => {
        console.log(res.data.push_notifications);
        dispatch(NotificationSuccess(res.data));
      })
      .catch(error => {
        console.log(error);
      })
  }
}
export const PutNotificationaction = (userEmail, client, access_token, ids) => {
  return function (dispatch) {
    if (ids != undefined) {
      const headers = {
        uid: userEmail,
        client: client,
        'access-token': access_token,
      }
      const body = {
        ids:  '[' + ids.toString() + ']'
      }
      axios.put('https://qanew.lawclerk.p2klabs.com/api/v1/attorney/update_notifications', body, { headers: headers })
        .then(res => {
          console.log(res.data.push_notifications);
          dispatch(NotificationMarked());
          dispatch(NotificationAction(userEmail, client, access_token))

        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}
export const NotificationMarked = (data) => {
  return {
    type: ActionType.NOTIFICATION_MARKED,
  }
}
export const NotificationSuccess = (data) => {
  return {
    type: ActionType.NOTIFICATION_SUCCESS,
    data:data.push_notifications,
    markData:data.unread_notifications
  }
}