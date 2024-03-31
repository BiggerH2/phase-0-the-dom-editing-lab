require("./helpers.js");

describe("within index.html", () => {
  it("contains a <body> tag", () => {
    expect(document.querySelector("body")).to.not.be.null;
  });

  it("contains an <h1> tag", () => {
    expect(document.querySelector("h1")).to.not.be.null;
  });

  it("contains a <p> tag", () => {
    expect(document.querySelector("p")).to.not.be.null;
  });

  it("within the <p>, it contains a <strong> tag", () => {
    const pElement = document.querySelector("p");
    expect(pElement.querySelector("strong")).to.not.be.null;
  });

  it("within the <p>, it contains an <em> tag", () => {
    const pElement = document.querySelector("p");
    expect(pElement.querySelector("em")).to.not.be.null;
  });

  it("within the <p>, it contains an <a> tag", () => {
    const pElement = document.querySelector("p");
    expect(pElement.querySelector("a")).to.not.be.null;
  });

  it("within the <body>, it contains a <table> tag", () => {
    expect(document.querySelector("body").querySelector("table")).to.not.be.null;
  });
});
