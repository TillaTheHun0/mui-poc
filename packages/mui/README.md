# Modular UI Api PoC

This is a quick PoC to demonstrate how the Modular UI API might be implemented

## Parts

- `/core` - this is ModularUI Core. No React. Just JS. This is where the `MuiCoreProvider` implementation is as well as the interface for the `MuiClient`. **This is most interesting part and where most discussion will probably take place**.

- `/components` - this is a ModularUI React implementation, using a React `Context` to implement the React HoC `MuiProvider`. The HoC is just a thin wrapper around the `MuiCoreProvider`

- `/hooks` - this is a ModularUI React Hook implementation for fetching content. Much of this was borrowed from Apollo's `useQuery` hook.

## MUI Core Api

The `MuiCoreProvider` is the start of a simple api that is meant to do two things: fetching content and storing content.

Each fetch or store operation accepts an `operation` and a `dataResultCb` which is a Node style callback `(err, data) => {}`.

The `operation` can be absolutely anything. The `MuiCoreProvider` does not care. It simply passes the `operation` to the `MuiClient`. This is very powerful; the `operation` can be tailored to match a specific `MuiClient` implementation and can be enforced by the implementation while enforcing no constraints on the core of Modular UI.

Also, the result of the `dataResultCb` can be anything. It is merely passed the result of the fetch or store from the client. This is also very powerful; the callback result can be tailored to match a specific consumer of Modular UI and provided by the consumer themselves.

This is precisely how the `useContent` hook is implemented, as a custom provider consumer that provides a custom `dataResultCb`, which accepts the client result, and provides a response with a shape similar to Apollo's `useQuery` hook.

This implementation heavily takes advantage of `TypeScript` generic types to provide great developer experience when working with a particular MuiClient implementation; the intellisense is fully supported by providing your own custom types for the `operation` shape and `dataResultCb` return shape. These types can be implemented and provided by other libraries that implement the `MuiClient` API.

## Example

Check out `packages/app/pages/index.ts` to see an example of a `MuiClient` implementation and using the `react` `MuiProvider`. It renders a component, `RichText` that uses the `useContent` hook from Mui for fetching it's content
