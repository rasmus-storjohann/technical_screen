import Model from './Model';
import parse from './parse';
let getUri = require('get-uri');
let concat = require('concat-stream')

let createModel = (callback) => {
  let url = 'ftp://webftp.vancouver.ca/OpenData/csv/community_centres.csv';
  getUri(url, (error, response) => {
    if (error) throw error;
    response.pipe(concat(buffer => {
      let bufferContent = buffer.toString();
      let modelData = parse(bufferContent);
      let model = new Model(modelData);
      callback(model);
    }));
  });
};

export default createModel;
