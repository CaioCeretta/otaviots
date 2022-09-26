type verifyUserFn = (user: User, sentValue: User) => boolean;

type User = {
  username: string;
  password: string;
};

const verifyUser: verifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = {
  username: 'Thiago',
  password: '@RuiFuori123',
};

const sentUser = {
  username: 'Thiago',
  password: '@RuiFuori123',
};

const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
