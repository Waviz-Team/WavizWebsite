// Binary Search Tree for Waviz Docs live search
export class BSTNode {
  key: string;
  data: any;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(key: string, data: any) {
    this.key = key.toLowerCase(); // for case-insensitive search
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  root: BSTNode | null = null;

  insert(key: string, data: any) {
    const newNode = new BSTNode(key, data);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (key.toLowerCase() < current.key) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  search(query: string): any[] {
    const result: any[] = [];
    const q = query.toLowerCase().trim();

    const dfs = (node: BSTNode | null) => {
      if (!node) return;
      if (node.key.includes(q)) result.push(node.data);
      dfs(node.left);
      dfs(node.right);
    };

    dfs(this.root);
    return result;
  }

  static deduplicateResults(results: any[]): any[] {
    const seen = new Set();
    return results.filter((item) => {
      if (seen.has(item.name)) return false;
      seen.add(item.name);
      return true;
    });
  }
}
