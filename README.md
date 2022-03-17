# Dona
Solana Riptide Hackathon Project

[Presentation Link](https://docs.google.com/presentation/d/1jOvFfoGpHa9zBjC2quTEGFc7hLyspL3vVwWp19CYApw/edit?usp=sharing)

## Project Description
Dona is a checkout donations platform built on Solana Pay. Using Dona, merchants can set up a checkout donation campaign that smoothly integrates into their existing Solana Pay checkout flow to enable charitable donations. With flexible integration options, plug-and-play React UX components, no-code configuration settings, and analytics, we make it easy for merchants to showcase their values, support their favorite causes, and ultimately do good.

## Why we built it
Traditional checkout donation systems (e.g. round-up-and donate at the grocery store) generate over $605 M annually in charitable giving. However, by running on traditional payment rails, traditional checkout donations suffer from issues such as high merchant processing fees, slow settlement of time-sensitive funds, limited transparency on donation delivery, and limited accessibility. With the new Solana Pay rails, we see an opportunity to reimagine and improve the checkout donations experience for merchants, consumers, and donation recipients alike.

# Local Setup Instructions
Dona consists of a React app frontend, Flask App backend, and PostgreSQL database. Follow the instructions below in order to demo on your local machine.

## PostgreSQL Setup
You will need to set up a local [PostgreSQL db](https://www.codementor.io/@engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb).

Once PostgreSQL is installed, create the database for the application within postgresql: `CREATE DATABASE dona;`

## Flask App Setup
1. Navigate to the `/server` directory
2. Install virtualenv: `pip install virtualenv`
3. Create virtualenv: `virtualenv venv`
4. Activate virtualenv: `source venv/bin/activate`
5. Install dependencies: `pip install -r requirements.txt`
6. Set environment variables e.g. `export SECRET_KEY=foo && export DATABASE_URI=postgresql://user:password@localhost:5432/dona && export FLASK_ENV=development && export APP_BASE_URL=http://127.0.0.1:5000`
7. Apply database migrations: `flask db upgrade`
8. Set an env variable with the public key of a wallet (e.g. Phantom) you want to log into the merchant dashboard with e.g. `export MERCHANT_DEMO_KEY=9ZNTfG4NyQgxy2SWjSiQoUyBPEvXT2xo7fKc5hPYYJ7b`. Make sure that **you have access to this wallet**, otherwise wallet adaptor will not work when you try to log in.
9. Generate some dummy demo data to populate the dashboard: `python generate_sample_data.py`
10. Run app: `flask run`

## React App Setup

