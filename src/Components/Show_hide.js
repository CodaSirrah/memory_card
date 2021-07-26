const SHOW_HIDE = (() => {
  const HIDE = (e) => {
    e.target.parentElement.classList.toggle('hidden');
  }
  const SHOW_WIN = () => {
    document.querySelector('#winner').classList.toggle('hidden');
  }
  const SHOW_LOSS = () => {
    document.querySelector('#loser').classList.toggle('hidden');
  }
  return {
    HIDE,
    SHOW_WIN,
    SHOW_LOSS
  }

})();

export default SHOW_HIDE
