var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return ''
  let comm = strs[0].split('')
  console.log(comm);
  for (let i = 0; i < comm.length; i++) {
    strs.forEach((item, index) => {
      console.log(item.slice(0, 2));
      
      if (item.indexOf(comm[i]) != -1) {
      }
    })
  }
  return comm
};
console.log(longestCommonPrefix(["flower","flow","flight"]));
