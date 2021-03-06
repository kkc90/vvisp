module.exports = async function(compileInformation, options) {
  const { compile, forIn } = require('@haechi-labs/vvisp-utils');
  const path = require('path');
  const { REGISTRY_PATH } = require('../constants');

  let compileFiles = [];
  if (compileInformation.noRegistry !== true) {
    compileFiles.push(REGISTRY_PATH);
  }

  forIn(compileInformation.targets, contract => {
    if (contract.path) {
      compileFiles.push(path.join('./', contract.path));
    }
  });

  return compile(compileFiles, options);
};
