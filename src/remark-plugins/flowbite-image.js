import { visit } from "unist-util-visit";

export function flowbiteImage() {
  return (tree) => {
    visit(tree, "image", (node, index, parent) => {
      const { url, alt, title } = node;
      // 如果图片已经处理过了，就不再处理
      if (node.processed) return;
      // 生成新的HTML节点
      const node1 = {
        type: "html",
        value: `<figure class="max-w-full">`,
      };
      const node2 = {
        type: node.type,
        url: node.url,
        alt: node.alt,
        title: node.title,
        processed: true,
      };
      const node3 = {
        type: "html",
        value: `${
          title
            ? `<figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">${title}</figcaption>`
            : ""
        }
                </figure>`,
      };
      // 替换原有节点
      parent.children.splice(index, 1, ...[node1, node2, node3]);
    });
  };
}
