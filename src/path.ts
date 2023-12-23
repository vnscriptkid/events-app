export const paths = {
  home() {
    return "/";
  },
  eventShow(id: string) {
    return `/events/${id}`;
  },
  eventCreate() {
    return "/events/create";
  },
  eventEdit(id: string) {
    return `/events/${id}/edit`;
  },
};
