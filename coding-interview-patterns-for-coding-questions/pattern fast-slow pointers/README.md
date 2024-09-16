# Fast & Slow Pointer Approach (Hare & Tortoise Algorithm)

The **Fast & Slow pointer approach**, also known as the **Hare & Tortoise algorithm**, is a pointer algorithm that uses two pointers moving through an array, sequence, or LinkedList at different speeds.

## Use Cases

This approach is especially useful when dealing with **cyclic LinkedLists** or **cyclic arrays**.

By moving at different speeds (such as in a cyclic LinkedList), the algorithm proves that the two pointers are bound to meet. The **fast pointer** should eventually catch up with the **slow pointer** once both are inside the cyclic loop.

## Famous Problems Solved with Fast & Slow Pointer

One of the most famous problems solved using this technique is **finding a cycle in a LinkedList**.

Let’s dive into this problem to better understand the **Fast & Slow pattern**.
