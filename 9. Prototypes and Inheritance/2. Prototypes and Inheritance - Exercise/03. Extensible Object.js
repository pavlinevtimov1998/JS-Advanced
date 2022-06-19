function extensibleObject() {
  return {
    extend: function (template) {
       let proto = Object.getPrototypeOf(this);
       let templateArr = Object.entries(template);

       for(let [key, value] of templateArr) {
        if(typeof value == 'function') {
            proto[key] = value;
        } else {
            this[key] = value;
        }
       }
    },
  };
}
const myObj = extensibleObject();
const template = {
  extensionMethod: function () {},
  extensionProperty: "someString",
};
myObj.extend(template);
console.log(myObj);