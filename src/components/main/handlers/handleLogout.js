function handleLogout () {
    localStorage.removeItem('usr');
    window.location.replace('/auth');
}

export default handleLogout;