"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Dog = /*#__PURE__*/function () {
  function Dog(name, breed, age) {
    _classCallCheck(this, Dog);
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
  return _createClass(Dog, [{
    key: "greeting",
    value: function greeting() {
      return "Hi, I'm ".concat(this.name, " and I am a ").concat(this.age, " year old ").concat(this.breed, ".");
    }
  }]);
}();
var myDog = new Dog('Moopy', 'Golden', 2);
//fixed code because this was using myPerson not myDog <<< doh bad codecacdemy
console.log(myDog.age); // 2
console.log(myDog.greeting()); // "Hi I'm Moopy and I'm a 2 year old Golden."