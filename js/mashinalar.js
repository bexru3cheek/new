const mashinaDB = {
  count: 0,
  typs: [],
  private: false,
  start: () => {
    mashinaDB.count = +prompt("Nechta avtomobilingiz bor:");

    // while (
    //   mashinaDB.count == null ||
    //   mashinaDB.count == "" ||
    //   isNaN(mashinaDB.count)
    // ) {
    //   mashinaDB.count = +prompt("Nechta avtomobilingiz bor:");
    // }
    if (mashinaDB.count == 0) {
      alert("Siz avtomobilga qiziqmas ekansiz!");
    } else {
      let type = prompt(
        "Yoqtirgan mashinalaringizning nomini vergul orqali ajratib yozing:"
      );
      mashinaDB.typs = type.split(", ");
      let randomindex = Math.floor(Math.random() * mashinaDB.typs.length);
      let randomelement = mashinaDB.typs[randomindex];
      alert(`Sizga bugun ${randomelement}ni minish tavsiya etiladi!`);
    }
  },
  visibleDB: () => {
    let ruhsat = confirm("Sizning obyektingiz terminalda ko'rinsinmi?");
    if (ruhsat) {
      console.log(mashinaDB);
    } else {
      mashinaDB.private = true;
    }
  },
};

mashinaDB.start();
mashinaDB.visibleDB();
