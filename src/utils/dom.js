export function hasParent (dom, banDom) {
  while (dom) {
    if (banDom.find(d => d === dom)) {
      return true
    }else{
      dom = dom.parentNode
    }
  }
}