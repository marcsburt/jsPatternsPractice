function debounce(fn, delay) {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;

    // clear Timeout here
    clearTimeout(timer);

    time = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}

// use function

function foo() {
  console.log("we be scrolling!");
}

let elem = document.getElementById("container");

elem.addEventListener("scroll", debounce(foo, 2000));
