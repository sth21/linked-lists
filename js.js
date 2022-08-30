const Node = (value) => {
    return { value, nextNode: null };
}

const linkedList = (() => {
    const head = (list) => {
        return list;
    };
    const tail = (list) => {
        let node = list;
        while (node.nextNode !== null) {
            node = node.nextNode;
        }
        return node;
    };
    const append = (list, value) => {
        const newNode = Node(value);
        const tail = linkedList.tail(list);
        tail.nextNode = newNode;
        return list;
    };
    const prepend = (list, value) => {
        const newNode = Node(value);
        const head = linkedList.head(list);
        newNode.nextNode = head;
        return newNode;
    };
    const size = (list) => {
        let node = list;
        let counter = 0;
        while (node.nextNode !== null) {
            ++counter;
            node = node.nextNode;
        }
        ++counter;
        return counter;
    };
    const at = (list, index) => {
        if (index < 0 || index >= linkedList.size(list)) return null;
        let node = list;
        let i = 0;
        while (i !== index) {
            node = node.nextNode;
            ++i;
        }
        return node;
    };
    const pop = (list) => {
        const newLastNodeIndex = linkedList.size(list) - 2;
        const newLastNode = linkedList.at(list, newLastNodeIndex);
        newLastNode.nextNode = null;
        return list;
    };
    const contains = (list, value) => {
        let node = list;
        while (node.nextNode !== null) {
            if (node.value === value) return true;
            node = node.nextNode;
        }
        if (node.value === value) return true;
        return false;
    };
    const find = (list, value) => {
        let node = list;
        let size = linkedList.size(list) - 1;
        let counter = 0;
        do {
            if (node.value === value) return counter;
            ++counter;
            node = node.nextNode;
        } while (counter !== size);
        return null;
    };
    const toString = (list) => {
        let node = list;
        let counter = 0;
        let size = linkedList.size(list);
        let string = '';
        while (counter !== size) {
            string += `${node.value} -> `;
            node = node.nextNode;
            ++counter;
        }
        string += 'null';
        return string;
    };
    const insertAt = (list, value, index) => {
        if (index < 0 || index > linkedList.size(list)) return list;
        if (index === 0) return linkedList.prepend(list, value);
        if (index === linkedList.size(list)) return linkedList.append(list, value);
        const newNode = Node(value);
        newNode.nextNode = linkedList.at(list, index);
        linkedList.at(list, index - 1).nextNode = newNode;
        return list;
    }
    const removeAt = (list, index) => {
        if (index < 0 || index > linkedList.size(list) - 1) return list;
        if (index === 0) {
            const newHead = linkedList.at(list, index + 1);
            list.nextNode = null;
            return newHead;
        }
        if (index === linkedList.size(list) - 1) {
            const newHead = linkedList.at(list, linkedList.size(list) - 2);
            newHead.nextNode = null;
            return list;
        }
        const previousNode = linkedList.at(list, index - 1);
        const followingNode = linkedList.at(list, index + 1);
        previousNode.nextNode = followingNode;
        return list;
    }
    return { head, tail, append, prepend, size, at, pop, contains, find, toString, insertAt, removeAt };
})();
