# @atomico/uranio

[![npm](https://badgen.net/npm/v/@atomico/uranio)](http://npmjs.com/@atomico/uranio)
[![gzip](https://badgen.net/bundlephobia/minzip/@atomico/uranio)](https://bundlephobia.com/result?p=@atomico/uranio)

Small experiment that removes the layer of Hooks, Hooks, Functional Components and the context of [@atomico/core](https://github.com/atomicojs/core). to only work within web-component.

```jsx
import { h, Element } from "@atomico/uranio";

class Counter extends Element {
	static observables = {
		value: Number
	};
	increment() {
		this.value += 1;
	}
	decrement() {
		this.value -= 1;
	}
	render() {
		return (
			<host shadowDom>
				<style>{`:host{display:block;padding:1rem}`}</style>
				<button onClick={this.increment}>increment</button>
				<span>::{this.value}::</span>
				<button onClick={this.decrement}>decrement</button>
			</host>
		);
	}
}

customElements.define("uranio-counter", Counter);
```
