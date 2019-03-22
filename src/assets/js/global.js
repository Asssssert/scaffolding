export default {
  toPageByName(name, query) {
    router.push({name: name, query: query});
  },
  toPageByPath(path, query) {
    router.push({path: path, query: query});
  },
  message(type, msg, showClose) {
    if (showClose == undefined) showClose = false;
    bus.$message({
      showClose: showClose,
      message: msg,
      type: type
    })
  },
  notification(type, msg) {
    bus.$notify({
      message: msg,
      type: type
    })
  }
}
