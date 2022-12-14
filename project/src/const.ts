export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NonAuth = 'NON_AUTH',
  Unknown = 'UNKNOWN'
}

export enum RatingDescription {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome'
}

export enum APIRoute {
  Films = '/films',
  Favorite = '/favorite',
  Promo = '/promo',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}
