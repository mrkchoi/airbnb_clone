
export const fetchHost = hostId => {
  return $.ajax({
    method: "GET",
    url: `/api/users?host_id=${hostId}`
  });
};
