import { visit } from "unist-util-visit";

export function popupSyntax() {
  return (tree) => {
    visit(tree, "link", (node, index, parent) => {
      // 检查是否是popup语法
      if (node.url && node.url === "popover") {
        const id = node.children[0].value;
        const htmlNode = {
          type: "html",
          // 这里只生成一个基本的HTML结构作为示例
          // 你可以根据需要添加更复杂的HTML和JavaScript
          value: `
          <a href="#" class="decoration-dashed font-normal" data-popover-target="popover-image-${id}">${node.children[0].value}</a>
          `,
        };
        // 替换原有节点
        parent.children.splice(index, 1, htmlNode);
        const popover = {
          type: "html",
          value: `
          <div data-popover id="popover-image-${id}" role="tooltip" class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-md shadow-sm opacity-0 max-w-72 sm:max-w-48 min-h-5 min-w-5">
            <div class="p-3">
              ${node.title}
            </div>
            <div data-popper-arrow></div>
          </div>
          `
        }
        parent.children.push(popover);
      }
    });
  };
}
