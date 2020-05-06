const reducer = (state = {}, action) => {
  switch (action.type) {
  case 'SWITCH_THEME': {
    const newTheme = state.mode === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('mode', newTheme);
    document.body.className = newTheme;
    console.log('SWITCH_THEME', state);
    console.log('newTheme', newTheme);
    return {
      mode: newTheme,
    };
  }
  default:
    return state;
  }
};

export default reducer;
