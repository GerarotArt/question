#!/bin/bash
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
		CREATE DATABASE bizcuit;
    CREATE TABLE beer (
    id  int NOT NULL PRIMARY KEY,
    uid  varchar(255) NOT NULL,
		brand varchar(255) NOT NULL,
		name varchar(255) NOT NULL,
		style varchar(255) NOT NULL,
		hop varchar(255) NOT NULL,
		yeast varchar(255) NOT NULL,
		malts varchar(255) NOT NULL,
		ibu varchar(255) NOT NULL,
		alcohol varchar(255) NOT NULL,
		blg varchar(255) NOT NULL,
		randomcount int NOT NULL DEFAULT 0
    );
EOSQL