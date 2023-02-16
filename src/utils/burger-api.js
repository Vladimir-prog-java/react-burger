const url = "https://norma.nomoreparties.space/api/ingredients";

export function getIngredients (setData, setError) {
return fetch(url)
.then((response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
})
.then((data) => {
  setData(data.data);
})
.catch((error) => setError(`${error}`));
}