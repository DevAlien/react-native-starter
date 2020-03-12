class Navigation {
  setNavigation(navigation) {
    this.navigation = navigation;
  }

  navigate = (name, params) =>
    this.navigation && this.navigation.navigate(name, params);
  goBack = () => this.navigation && this.navigation.goBack();
  reset = name =>
    this.navigation &&
    this.navigation.reset({
      index: 0,
      routes: [{name: name}],
    });
}

export default new Navigation();
