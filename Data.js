class Data {
  url;
  constructor(url) {
    this.url = url;
  }

  getData() {
    return new Promise((resolve, rej) => {
      let xml = new XMLHttpRequest();
      xml.open("get", this.url);
      xml.onreadystatechange = () => {
        if (xml.readyState === 4 && xml.status === 200) {
          resolve(JSON.parse(xml.responseText));
        }
      };
      xml.send();
    });
  }
}

let data = new Data(
  "https://raw.githubusercontent.com/zile028/movie-db/main/movie-db.json"
);
