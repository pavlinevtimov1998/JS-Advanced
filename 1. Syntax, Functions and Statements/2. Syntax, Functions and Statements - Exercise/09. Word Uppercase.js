function wordUppercase(string) {
    let result = string.toUpperCase()
    .split(/[\W]+/)
    .filter(w => w.length > 0)
    .join(", ");

  console.log(result);
}
wordUppercase("Hi, how are you?");
console.log("---------");
wordUppercase("hello");
