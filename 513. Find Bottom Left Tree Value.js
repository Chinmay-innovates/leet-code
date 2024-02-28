/*
Given the root of a binary tree, return the leftmost value in the last row of the tree.

Example 1:
Input: root = [2,1,3]
Output: 1
Example 2:


Input: root = [1,2,3,4,null,5,6,null,null,7]
Output: 6
*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Function to find the leftmost value in the last row of the binary tree
function findBottomLeftValue(root) {
  if (!root) return null;

  let queue = [root];
  let leftmostValue = null;

  while (queue.length > 0) {
    let levelSize = queue.length;
    // Initialize leftmost value for the current level
    leftmostValue = queue[0].val;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift(); // Dequeue node
      if (node.left) queue.push(node.left); // Enqueue left child
      if (node.right) queue.push(node.right); // Enqueue right child
    }
  }

  return leftmostValue;
}

// Example usage:
// Example 1
let root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(3);
console.log("Example 1 Output:", findBottomLeftValue(root1)); // output 1

// Example 2
let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.right.right = new TreeNode(5);
root2.right.right.left = new TreeNode(6);
root2.right.right.right = new TreeNode(7);
console.log("Example 2 Output:", findBottomLeftValue(root2)); // output 6

//Recursive
var findBottomLeftValue = (root) => {
  const res = [0, 0];
  dfs(root, 0, res);
  return res[0];
};

function dfs(root, level, res) {
  if (!root) {
    return;
  }

  if (level === res[1]) {
    res[0] = root.val;
    res[1] = level + 1;
  }

  dfs(root.left, level + 1, res);
  dfs(root.right, level + 1, res);
}
