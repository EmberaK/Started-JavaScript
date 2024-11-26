let age = prompt('Please, enter your age', '18')

/* function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  } */

/* function checkAge(age){
    age = age>18? true: confirm('Did parents allow you?');
}
 */
function checkAge(age){
    return (age>18)||confirm('Did parents allow you?');
}