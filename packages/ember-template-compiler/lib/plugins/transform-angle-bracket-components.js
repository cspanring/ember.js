export default function TransformAngleBracketComponents() {
  // set later within HTMLBars to the syntax package
  this.syntax = null;
}

/**
  @private
  @method transform
  @param {AST} ast The AST to be transformed.
*/
TransformAngleBracketComponents.prototype.transform = function TransformAngleBracketComponents_transform(ast) {
  let walker = new this.syntax.Walker();

  walker.visit(ast, node => {
    if (!validate(node)) { return; }

    node.tag = `<${node.tag}>`;
  });

  return ast;
};

function validate(node) {
  return node.type === 'ComponentNode';
}
