import Model from './Model';
import parse from './parse';

let createModel = url => {
  return fetch(url)
    .then(response => response.blob)
    .then(blob => parse(blob))
    .then(parsedBlob => new Model(parsedBlob))
    .catch(reason => {
      console.log("Failed to read community centre data: " + reason);
    });
}

export default createModel;
