import React, { Component } from "react";

export default class AjaxCall extends Component {
  xhrSuccess = () => {
    this.callback.apply(this, this.arguments);
  };

  xhrError = () => {
    console.error(this.statusText);
  };

  makeAjaxCall = (url, method, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.onload = () => callback(JSON.parse(xhr.responseText));
    xhr.onerror = this.xhrError;
    xhr.open(method, url, true);
    xhr.send(null);
  };

  toggleCall = () => {
    this.makeAjaxCall(
      "http://fakerestapi.azurewebsites.net/api/Books",
      "GET",
      books => {
        alert(JSON.stringify(books[0]));
        this.makeAjaxCall(
          "http://fakerestapi.azurewebsites.net/authors/books/" + books[0].ID,
          "GET",
          authors => {
            alert(authors);
          }
        );
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleCall}>Call</button>
      </div>
    );
  }
}
