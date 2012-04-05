
var fs = require('fs');
var wrench = require('wrench');

/**
 * Creates a new piewpiew managed project
 */
function create(projectName) {
  console.log("Creating new project at ./" + projectName);
  fs.mkdir(projectName, 777, function(err) {
    if (!err) {
      createDefaultFolderStructure(projectName);
    }
  });
}

function createDefaultFolderStructure(projectName) {
  console.log("Creating default folder structure at ./" + projectName);

  wrench.copyDirRecursive(__dirname + "/project-templates/default", "./" + projectName, function() {
    
  });

  console.log(__dirname);
}

function createDefaultPackageFile(projectName) {

}

create("test-project")