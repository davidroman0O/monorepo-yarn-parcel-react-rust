import React, { useState } from 'react'

export default function () {
    const [ count, set ] = useState(0);

    const increment = () => set(count + 1);
    const decrement = () => set(count - 1);

    return (
        <div>
          <p>Libraries/Components/Counter The current count is {count}</p>
          <button onClick={() => increment()}>Increment</button>
          <button onClick={() => decrement()}>Decrement</button>
        </div>
    )
};
