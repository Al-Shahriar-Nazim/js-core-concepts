/**
 * Callback Function কী?

যখন একটা function, আরেকটা function-এর ভেতরে parameter হিসেবে পাঠানো হয়, আর পরে সেই function-টা ডাকা হয় — তখন সেটাকে Callback Function বলে।
 */

function pakiBhai(callBack, patro, patri) {
  console.log("patro is", patro);
  console.log("call me back parametter", callBack);

  if (patri) {
    // console.log(callBack);
    callBack(patro);
  } else {
    console.log("tor kopale biya nai");
  }
}
function cellSomeOne(person) {
  console.log("calling person", person);
}
// cellSomeOne('jodu');
// output : calling person jodu
pakiBhai(cellSomeOne, "jodu","modu");
