import Model from './Model';
import parse from './parse';

let url = 'ftp://webftp.vancouver.ca/OpenData/csv/community_centres.csv';

let createModel = () => {
  return fetch(url)
    .then(response => response.blob)
    .then(blob => parse(blob))
    .then(parsedBlob => new Model(parsedBlob))
    .catch(reason => {
      console.log("Failed to read community centre data: " + reason);
    });
}

export default createModel;
