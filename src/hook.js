/* eslint-disable no-use-before-define */
/* eslint-disable wrap-iife */
/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
function hook() {
  const devTools = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
  devTools.onCommitFiberRoot = (function (original) {
    return function (...args) {
      const fiberDOM = args[1];
      const rootNode = fiberDOM.current.stateNode.current;
      const arr = [];
      recurse(rootNode.child, arr);
      console.log(arr[0]);
      return original(...args);
    };
  })(devTools.onCommitFiberRoot);
}

function recurse(node, parentArr) {
  const component = {
    name: '',
    children: [],
    state: null,
    props: null,
    node,
  };

  // console.log('stepped', node);

  // get name
  if (node.type) {
    if (node.type.name) {
      component.name = node.type.name;
    } else {
      // this is an html element
      // continue traversal without adding to data obj
      if (node.child) recurse(node.child, parentArr);
      if (node.sibling) recurse(node.sibling, parentArr);
      return;
    }
  } else {
    // this is a misc fiber node
    // continue traversal without adding to data obj
    if (node.child) recurse(node.child, parentArr);
    if (node.sibling) recurse(node.sibling, parentArr);
    return;
  }

  // get state
  if (node.memoizedState) component.state = node.memoizedState.memoizedState;

  // get props
  if (node.memoizedProps) component.props = node.memoizedProps;

  component.children = [];

  parentArr.push(component);
  if (node.child) recurse(node.child, component.children);
  if (node.sibling) recurse(node.sibling, parentArr);
}

module.exports = hook;
