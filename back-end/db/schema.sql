DROP DATABASE IF EXISTS reports_gen_dev;
CREATE DATABASE reports_gen_dev;

\c reports_gen_dev;

CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    transaction_date TEXT NOT NULL,
    deposit VARCHAR(10) NOT NULL,
    name TEXT NOT NULL
);