import * as UserApiUtil from '../util/user_api_util';
export const RECEIVE_HOST = "RECEIVE_HOST";

const receiveHost = (host) => {
  return ({
    type: RECEIVE_HOST,
    host: host
  });
};

export const fetchHost = hostId => dispatch => {
  return UserApiUtil.fetchHost(hostId)
    .then(host => dispatch(receiveHost(host[0])));
};
