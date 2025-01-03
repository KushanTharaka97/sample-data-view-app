docker-compose down && docker-compose up --build

CREATE TABLE testing_tmp (
    ->   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ->   title VARCHAR(255) NOT NULL,
    ->   description TEXT ,
    ->   price DECIMAL(10,2) NOT NULL,
    ->   cover VARCHAR(255) 
    -> ) ENGINE=InnoDB;

INSERT INTO movies (title, description, price, cover) VALUES
  ('Inception', 'A mind-bending thriller about dreams within dreams.', 12.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYw8n7zmnvTpF2-AhWZBh6v2Exrla2tukLQ&s'),
  ('The Dark Knight', 'A superhero movie featuring Batman and the Joker.', 11.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0i6Aj-L1Tf8Ie4SgOt2ydYJsQw_N_AgE2A&s'),
  ('Interstellar', 'A journey through space and time to save humanity.', 8.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPCi01Y84Qlm16tiCO1xTWOd3VS2MZne6Xw&s'),
  ('The Matrix', 'A hacker discovers the truth about his reality.', 13.50, 'https://image.spreadshirtmedia.com/image-server/v1/compositions/T210A2PA4301PT17X26Y1D1041953304W27997H39835/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/the-matrix-movie-poster-artwork-mens-t-shirt.jpg'),
  ('Avatar', 'An epic adventure on the alien world of Pandora.', 15.75, 'https://images-cdn.ubuy.ae/6415e8e0efa2c5263c295a69-avatar-the-way-of-water-movie-poster-2.jpg'),
  ('Hi1 Example', 'Hi1 Example', 44.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnisfkF6V0zug-cejxIjbotsQMF7mFtEa6w&s');

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES;
