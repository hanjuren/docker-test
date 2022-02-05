class AuthService {
  public login = async () => {
    try {
      return 'login service'
    } catch (err) {
      console.log(err);
    }
  };
}

export default AuthService;
