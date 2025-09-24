import { tokenize } from "kuromojin";

tokenize("foo").then((tokens) => {
  console.log(tokens);
});
