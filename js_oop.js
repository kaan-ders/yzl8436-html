var obje = {
    adi: 'Ayşe',
    soyadi: 'Sarı',
    yasi: 35,
    il: 'Ankara',
    ilce: "Cankaya",
    maas: 5000.40,
    departman: ['Satış', 'Muhasebe'],
    sehir: {
        adi: "İstanbul",
        ulke: "Türkiye",
    }
};

obje.telefon = "2131231";
//alert(obje.maas);

var kisi = {
    isim: "Ahmet",
    dogumTarihi: "12.02.2001",
    yasi: 30
};

kisi.telefon = "0312000483287428";


class Kisi {
    //public int Yasi { get; set; }

    constructor(isim, dogumTarihi, yasi) {
        this.isim = isim;
        this.dogumTarihi = dogumTarihi;
        this.yasi = yasi;
    }
}

//var ahmet = new Kisi('Ahmet', '12.02.2001', 30);
//alert(ahmet.isim);
//ahmet.tazminat();


class Personel extends Kisi {
    constructor(isim, dogumTarihi, yasi, departman) {
        super(isim, dogumTarihi, yasi);
        this.departman = departman;
    }

    tazminat() {
        alert(this.isim + " adlı kişinin hakettiği tazminat: " + (this.yasi * 1000));
    }
}

var ahmet = new Personel('Ahmet', '12.02.2001', 30, 'Satış');
//ahmet.tazminat();


var json = JSON.stringify(obje);
var asd = JSON.parse(json);


localStorage.setItem("theme", "dark");
var item = localStorage.getItem("theme");

alert(item);

localStorage.removeItem("theme");