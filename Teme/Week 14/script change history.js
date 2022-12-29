console.log("test");
const changeHistory = () => {
  const stat = { page_id: 1, user_ID: 5 };
  const URL = "replaced-state.html";

  history.replaceState(stat, '', URL);

}