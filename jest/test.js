function test(title, callback){
  try {
    callback();
  } catch (error){
    console.error(title);
    console.error(error);
  }
};

module.exports = { test };
