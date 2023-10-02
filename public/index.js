const signUp = document.querySelector("#signUp");
const signIn = document.querySelector("#signIn");
const signUpPage = document.querySelector("#signUpPage");
const signInPage = document.querySelector("#signInPage");

signUp.addEventListener("click", () => {
  TransitionEvent;
  signInPage.classList.add("hidden");
  signUpPage.classList.remove("hidden");
  signInPage.classList.add("animate-sideways");
  signUpPage.classList.add("animate-sideways");
});

signIn.addEventListener("click", () => {
  TransitionEvent;
  signUpPage.classList.add("hidden");
  signInPage.classList.remove("hidden");
  signInPage.classList.add("animate-sideways");
  signUpPage.classList.add("animate-sideways");
});
