function listToTree(data, options) {
    options = options || {};
    const ID_KEY = options.idKey || 'id';
    const PARENT_KEY = options.parentKey || 'parent';
    const CHILDREN_KEY = options.childrenKey || 'children';

    const tree = [];
    const childrenOf = {};
    let item;
    let id;
    let parentId;

    for (let i = 0, length = data.length; i < length; i++) {
        item = data[i];
        item.collapse = false;
        id = item[ID_KEY];
        parentId = item[PARENT_KEY] || 0;
        childrenOf[id] = childrenOf[id] || [];
        item[CHILDREN_KEY] = childrenOf[id];

        if (parentId !== 0) {
            childrenOf[parentId] = childrenOf[parentId] || [];
            item.child = true;
            childrenOf[parentId].push(item);
        } else {
            if (!item.hasOwnProperty(PARENT_KEY)) {
                tree.push(item);
            }
        }
    }
    return tree;
}

export default listToTree;
