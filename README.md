# Pokedex

This project was generated with React version 18.2.0.

# Frontend Challenge

This is a frontend project that simulates a potential real-life designer hand-off that is given to a software engineer to implement. You have 72 hours to complete this challenge.

Your task is to implement the two Figma designs to spec and integrate it with a real, public GraphQL API.

**You are free to use any web framework and technology, as long as the core frontend stack is based on React.**

## Task Description

You are building two very simple flows.

### 1. Login page

This login page will simply check static credentials (e.g. admin/admin) which if work, should redirect the user to the main page.

**DO NOT build a full auth system for this. We do not expect you to build a backend.**

### 2. Pokedex (List view of Pokemons)

After the login page, you will be dropped into a "Pokedex", a simple dashboard that renders a list of Pokemon. When a Pokemon is selected, the selected Pokemon shows up on the right side with more details.

### 3. Design Pokemon details

You will notice that in the selected section, only the header is designed for you. You have free autonomy over how to design the details section, and you are encouraged to implement the details page yourself.


## What we are looking for

- Ability to create forms
- Ability to implement the various form states (field validation, error, success etc)
- Ability to implement style to spec
- Responsiveness
- Ability to use Graphql correctly
- Ability to integrate a real API
- Ability to implement a pagination API
- Clean-code and separation of component concerns
- Ability to design new UIs

## Recommendations

We recommend highlighting these skills if you have familiarity with it, however, this is optional and not necessary:

- Next.js or CRA
- Typescript
- CSS-in-JS (styled-components, emotion, etc.)
- Tailwind CSS
- XState
- Deploy/Hosted (eg. Netlify, Vercel, AWS, GCP, Azure)

## Figma Link

[https://www.figma.com/file/lv57Aog6JVWqWJH4STVKeL/frontend-challenge?node-id=0%3A1](https://www.figma.com/file/lv57Aog6JVWqWJH4STVKeL/frontend-challenge?node-id=0%3A1)

## Graphql API

[https://graphql-pokemon2.vercel.app/](https://graphql-pokemon2.vercel.app/)

Example query:

```
{
  pokemons(first: 10) {
    id
    number
    name
    image
    classification
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
  }
}

```
