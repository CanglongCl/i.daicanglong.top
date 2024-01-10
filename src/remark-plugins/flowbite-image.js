import { visit } from 'unist-util-visit'

export function flowbiteImage() {
  return (tree) => {
    visit(tree, "image", (node, index, parent) => {
      const { url, alt, title } = node;

      // 生成新的HTML节点
      const htmlNode = {
        type: "html",
        value: `<figure class="max-w-full">
                  <img class="h-auto max-w-full" src="${url}" alt="${alt}">
                  ${
                    title
                      ? `<figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">${title}</figcaption>`
                      : ""
                  }
                </figure>`,
      };
      // 替换原有节点
      parent.children.splice(index, 1, htmlNode);
    });
    visit(tree, "image", (node, index, parent) => {
      const { url, alt, title } = node;

      // 生成新的HTML节点
      const htmlNode = {
        type: "html",
        value: `<figure class="max-w-lg">
                  <img class="h-auto max-w-full" src="${url}" alt="${alt}">
                  ${
                    title
                      ? `<figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">${title}</figcaption>`
                      : ""
                  }
                </figure>`,
      };
      // 替换原有节点
      parent.children.splice(index, 1, htmlNode);
    });
  };
}
