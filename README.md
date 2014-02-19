# karma-benchmark-example
> A karma-benchmark example


## What is this?

This is a simple example that shows how to use `karma-benchmark` with the `karma-benchmark-reporter` and `karma-junit-reporter` reporters.

It pits native Array methods against a home-made utility library.


## Running the example

First, install dependencies:

```shell
npm install
```

## Run all browsers

This will run benchmarks in Chrome and Firefox:

```shell
grunt bench
```

## Run a single browser

You can pass `chrome` or `firefox`.

```shell
grunt bench:chrome
```

## Run directly from Karma

Grunt is not required. You can simply run Karma directly:

```shell
karma start
```

## CI run with JUnit report

This will run benchmarks in PhantomJS and write test results to `results/junit-benchmark-results.xml`:

```shell
grunt bench:ci
```
