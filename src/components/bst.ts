// This file defines a simple Binary Search Tree (BST)
// It's used to search API documentation quickly and case-insensitively

// A single node in the binary search tree
export class BSTNode {
  key: string;           // the text to search (e.g. name, description, etc.)
  data: any;             // the original item (e.g. API class)
  left: BSTNode | null;  // left child node
  right: BSTNode | null; // right child node

  constructor(key: string, data: any) {
    // Make key lowercase for case-insensitive search
    this.key = key.toLowerCase();
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// The Binary Search Tree class
export class BST {
  root: BSTNode | null = null;

  // Insert a key/data pair into the tree
  insert(key: string, data: any) {
    const newNode = new BSTNode(key, data);

    // If the tree is empty, set the new node as root
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    // Traverse the tree to find the correct position
    while (true) {
      if (key.toLowerCase() < current.key) {
        // Go left if key is smaller
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        // Go right if key is larger or equal
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // Search for all nodes that include the query string
  search(query: string): any[] {
    const result: any[] = [];
    const q = query.toLowerCase().trim();

    // Depth-first search through the tree
    const dfs = (node: BSTNode | null) => {
      if (!node) return;

      // If the key contains the query, save the data
      if (node.key.includes(q)) {
        result.push(node.data);
      }

      // Search both left and right subtrees
      dfs(node.left);
      dfs(node.right);
    };

    dfs(this.root);
    return result;
  }

  // Remove duplicate items from the result list
  // based on item.name (usually class name)
  static deduplicateResults(results: any[]): any[] {
    const seen = new Set();
    return results.filter((item) => {
      if (seen.has(item.name)) return false;
      seen.add(item.name);
      return true;
    });
  }
}
