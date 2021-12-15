fetch("https://www.reddit.com/r/aww/.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data.children);

    for (let i = 0; i < data.data.children.length; i++) {
      console.log(data.data.children[i].data);

      const div = document.createElement("div");
      const image = document.createElement("img");
      const h2 = document.createElement("h2");
      const link = document.createElement("a");

      image.setAttribute("src", data.data.children[i].data.thumbnail);

      div.append(image);
      const section = document.querySelector("section");
      section.append(div);

      h2.innerText = data.data.children.title;
    }
  });

//data.slice(0, 10);
