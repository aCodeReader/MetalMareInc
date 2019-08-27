DROP TABLE IF EXISTS decks, cards;

CREATE TABLE decks (
    id INT NOT NULL AUTO_INCREMENT,
    deck_name VARCHAR(50),
    deck_style VARCHAR(50),
    deck_type VARCHAR(50),
    deck_count VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE cards (
    card_id INT NOT NULL AUTO_INCREMENT,
    decks_id INT NOT NULL,
    card_name VARCHAR(50),
    descr VARCHAR(255),
    card_type VARCHAR(50),
    meaning_pos VARCHAR(255),
    meaning_neg VARCHAR(255),
    PRIMARY KEY (card_id),
    FOREIGN KEY (decks_id)
    REFERENCES decks (id)

)