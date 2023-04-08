CREATE schema bloq;

CREATE TABLE bloq.post(
    id serial primary key autoincrement,
    title text NOT NULL,
    content text NOT NULL,
    date timestamp default now()
)