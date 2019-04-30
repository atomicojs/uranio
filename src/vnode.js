export function createElement(type, props, children) {
	props = props || {};
	if (arguments.length > 3) {
		children = [children];
		for (let i = 3; i < arguments.length; i++) {
			children.push(arguments[i]);
		}
	}
	if (children != null) {
		props.children = children;
	}

	let vnode = { type, props },
		key = props.key;
	if (key != null) {
		vnode.key = "" + key;
	}
	return vnode;
}

export function toVnode(value) {
	if (value == null || typeof value == "boolean") value = "";

	if (typeof value == "string" || typeof value == "number") {
		return createElement(null, null, "" + value);
	}

	return value;
}

export function flatMap(children, keyes = [], list = []) {
	keyes = keyes || [];
	list = list || [];
	if (Array.isArray(children)) {
		let length = children.length;
		for (let i = 0; i < length; i++) {
			flatMap(children[i], keyes, list);
		}
	} else {
		let vnode = toVnode(children);
		if (typeof vnode == "object") {
			if (typeof vnode.type == "function") {
				return flatMap(vnode.type(vnode.props), keyes, list);
			}
			if (vnode.key != null) {
				if (keyes.indexOf(vnode.key) == -1) {
					keyes.push(vnode.key);
					keyes.$ = true;
				}
			}
		}
		list.push(vnode);
	}
	return list;
}
