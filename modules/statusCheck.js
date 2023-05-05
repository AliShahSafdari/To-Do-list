const checkStatus = (e, todos) => {
  const checkState = e.target.closest('input[type="checkbox"]');
  if (!checkState) return;
  const listLine = checkState.closest('li');
  const { id } = listLine.dataset;
  const status = !!checkState.checked;
  const currentIndex = todos.findIndex((todo) => parseInt(todo.id, 10) === parseInt(id, 10));
  listLine.dataset.status = status;
  todos[currentIndex].status = status;
};

export default checkStatus;
