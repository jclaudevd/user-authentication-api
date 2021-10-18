# User Authentication API

Simple user authentication API. [WIP]

## Getting started

* Clone repo
* Run `npm install` in project root
* Create `.env` file in project root, use `.env.example` for reference
* Manually create database/schema in `MySQL Workbench`
* Run `npm run dev` to spin up the api with hot reload

## Endpoints

#### **POST** `/api/auth/signup`
* Creates a new user. Accepts `email`, `password`, `firstName` and `lastName`.

#### **POST** `/api/auth/login`
* Log in with `email` and `password`. Returns JWT.

#### **GET** `/api/user`
* Returns user information. Header `Authorization: "Bearer token"` is required.
