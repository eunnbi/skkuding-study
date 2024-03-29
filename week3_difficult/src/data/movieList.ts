export type MovieData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export type MovieList = MovieData[]

export const movieList = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
      genre_ids: [27, 9648, 53],
      id: 631842,
      original_language: "en",
      original_title: "Knock at the Cabin",
      overview:
        "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
      popularity: 4112.616,
      poster_path: "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
      release_date: "2023-02-01",
      title: "Knock at the Cabin",
      video: false,
      vote_average: 6.5,
      vote_count: 670,
    },
    {
      adult: false,
      backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
      genre_ids: [28, 12, 878],
      id: 505642,
      original_language: "en",
      original_title: "Black Panther: Wakanda Forever",
      overview:
        "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
      popularity: 2678.485,
      poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      release_date: "2022-11-09",
      title: "Black Panther: Wakanda Forever",
      video: false,
      vote_average: 7.4,
      vote_count: 3708,
    },
    {
      adult: false,
      backdrop_path: "/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg",
      genre_ids: [16, 12, 35],
      id: 315162,
      original_language: "en",
      original_title: "Puss in Boots: The Last Wish",
      overview:
        "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      popularity: 2311.833,
      poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
      release_date: "2022-12-07",
      title: "Puss in Boots: The Last Wish",
      video: false,
      vote_average: 8.4,
      vote_count: 4159,
    },
    {
      adult: false,
      backdrop_path: "/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg",
      genre_ids: [28, 12, 53],
      id: 646389,
      original_language: "en",
      original_title: "Plane",
      overview:
        "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
      popularity: 2001.922,
      poster_path: "/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
      release_date: "2023-01-12",
      title: "Plane",
      video: false,
      vote_average: 6.9,
      vote_count: 717,
    },
    {
      adult: false,
      backdrop_path: "/k4V6EvpcOsu8CX10JD0H53lFXLq.jpg",
      genre_ids: [53, 28, 18, 80],
      id: 1058949,
      original_language: "en",
      original_title: "Little Dixie",
      overview:
        "Erstwhile Special Forces operative Doc Alexander is asked to broker a truce with the Mexican drug cartel in secrecy. When Oklahoma Governor Richard Jeffs celebrates the execution of a high-ranking cartel member on TV, his Chief of Staff and Doc inform him about the peace he just ended. But it’s too late, as Cuco, the cartel’s hatchet man, has set his vengeful sights on Doc’s daughter Dixie.",
      popularity: 1538.518,
      poster_path: "/cmWTZj9zzT9KFt3XyL0gssL7Ig8.jpg",
      release_date: "2023-02-03",
      title: "Little Dixie",
      video: false,
      vote_average: 6.2,
      vote_count: 33,
    },
    {
      adult: false,
      backdrop_path: "/A2avUoNFstnBhAnHiogXQs4c9Bt.jpg",
      genre_ids: [18, 27, 9648],
      id: 772515,
      original_language: "es",
      original_title: "Huesera",
      overview:
        "Valeria's joy at becoming a first-time mother is quickly taken away when she's cursed by a sinister entity. As danger closes in, she's forced deeper into a chilling world of dark magic that threatens to consume her.",
      popularity: 1514.435,
      poster_path: "/1mZcxuL4GLUvPdEXC4iZPjG2EO3.jpg",
      release_date: "2023-02-10",
      title: "Huesera: The Bone Woman",
      video: false,
      vote_average: 6.6,
      vote_count: 40,
    },
    {
      adult: false,
      backdrop_path: "/af1tFYzzT2mHIy2l7nTIU8PWfak.jpg",
      genre_ids: [80, 18, 53],
      id: 842942,
      original_language: "en",
      original_title: "Bandit",
      overview:
        "After escaping a Michigan prison, a charming career criminal assumes a new identity in Canada and goes on to rob a record 59 banks and jewellery stores while being hunted by a rogue task force. Based on the story of The Flying Bandit.",
      popularity: 1272.966,
      poster_path: "/yph9PAbmjYPvyvbeZvdYIhCZHEu.jpg",
      release_date: "2022-09-23",
      title: "Bandit",
      video: false,
      vote_average: 6.6,
      vote_count: 83,
    },
    {
      adult: false,
      backdrop_path: "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
      genre_ids: [878, 12, 28],
      id: 76600,
      original_language: "en",
      original_title: "Avatar: The Way of Water",
      overview:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      popularity: 1144.966,
      poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      release_date: "2022-12-14",
      title: "Avatar: The Way of Water",
      video: false,
      vote_average: 7.7,
      vote_count: 5556,
    },
    {
      adult: false,
      backdrop_path: "/jYbABnXml6XyQ7cfhZFkMRZvMQz.jpg",
      genre_ids: [80, 28],
      id: 823999,
      original_language: "it",
      original_title: "Diabolik - Ginko all'attacco!",
      overview:
        "Diabolik nearly gets caught in Inspector Ginko's latest trap, leaving his partner in crime Eva Kant behind in the escape. Furious, Eva offers Ginko her help in capturing the King of Terror, but the former has to face the return of an old flame of his: Altea, Duchess of Vallenberg.",
      popularity: 1188.531,
      poster_path: "/31MkuLvT1CfGn7RYorWrqEY7NEM.jpg",
      release_date: "2022-11-17",
      title: "Diabolik - Ginko all'attacco!",
      video: false,
      vote_average: 5.8,
      vote_count: 46,
    },
    {
      adult: false,
      backdrop_path: "/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg",
      genre_ids: [878, 27, 35],
      id: 536554,
      original_language: "en",
      original_title: "M3GAN",
      overview:
        "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
      popularity: 1117.018,
      poster_path: "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
      release_date: "2022-12-28",
      title: "M3GAN",
      video: false,
      vote_average: 7.5,
      vote_count: 1844,
    },
    {
      adult: false,
      backdrop_path: "/zGoZB4CboMzY1z4G3nU6BWnMDB2.jpg",
      genre_ids: [28, 10749, 35],
      id: 758009,
      original_language: "en",
      original_title: "Shotgun Wedding",
      overview:
        "Darcy and Tom gather their families for the ultimate destination wedding but when the entire party is taken hostage, “’Til Death Do Us Part” takes on a whole new meaning in this hilarious, adrenaline-fueled adventure as Darcy and Tom must save their loved ones—if they don’t kill each other first.",
      popularity: 1030.834,
      poster_path: "/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg",
      release_date: "2022-12-28",
      title: "Shotgun Wedding",
      video: false,
      vote_average: 6.4,
      vote_count: 565,
    },
    {
      adult: false,
      backdrop_path: "/3JSoB7eMbCd8sE8alxNiUtrNiTz.jpg",
      genre_ids: [12, 878, 35],
      id: 640146,
      original_language: "en",
      original_title: "Ant-Man and the Wasp: Quantumania",
      overview:
        "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
      popularity: 1001.154,
      poster_path: "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
      release_date: "2023-02-15",
      title: "Ant-Man and the Wasp: Quantumania",
      video: false,
      vote_average: 6.5,
      vote_count: 819,
    },
    {
      adult: false,
      backdrop_path: "/k64bxyjMaKCuqVzX2xVp4NCmGvq.jpg",
      genre_ids: [16, 10751, 35],
      id: 1058732,
      original_language: "en",
      original_title: "The Simpsons Meet the Bocellis in Feliz Navidad",
      overview:
        "This Christmas, Homer surprises Marge with the ultimate gift: an unforgettable performance from Italian opera superstar Andrea Bocelli and his children Matteo and Virginia.",
      popularity: 919.44,
      poster_path: "/9rJFKvYvSyQ3HoTl1gcU55FOzYi.jpg",
      release_date: "2022-12-15",
      title: "The Simpsons Meet the Bocellis in Feliz Navidad",
      video: false,
      vote_average: 5.3,
      vote_count: 20,
    },
    {
      adult: false,
      backdrop_path: "/cL0cdccOMzM508ODsWPfHVMMAzo.jpg",
      genre_ids: [28],
      id: 267805,
      original_language: "en",
      original_title: "There Are No Saints",
      overview:
        "A man is imprisoned for a crime he didn't commit. When his wife is murdered and his son kidnapped and taken to Mexico, he devises an elaborate and dangerous plan to rescue his son and avenge the murder.",
      popularity: 864.512,
      poster_path: "/fcOTYArjKuAgufwHoTvx8w9UKCv.jpg",
      release_date: "2022-05-27",
      title: "There Are No Saints",
      video: false,
      vote_average: 5.6,
      vote_count: 51,
    },
    {
      adult: false,
      backdrop_path: "/AsEgGeccI32SwMBkxpwhOkhbzmF.jpg",
      genre_ids: [28, 878, 53, 27],
      id: 1011679,
      original_language: "en",
      original_title: "Shark Side of the Moon",
      overview:
        "Decades ago, the USSR developed unkillable sharks and launched them to the moon. Today, a team of American astronauts will endure the fight of their lives.",
      popularity: 1286.971,
      poster_path: "/v5CfpzxoJDkZxjZAizClFdlEF0U.jpg",
      release_date: "2022-08-12",
      title: "Shark Side of the Moon",
      video: false,
      vote_average: 3.9,
      vote_count: 8,
    },
    {
      adult: false,
      backdrop_path: "/fTLMsF3IVLMcpNqIqJRweGvVwtX.jpg",
      genre_ids: [28, 80, 53],
      id: 1035806,
      original_language: "en",
      original_title: "Detective Knight: Independence",
      overview:
        "Detective James Knight 's last-minute assignment to the Independence Day shift turns into a race to stop an unbalanced ambulance EMT from imperiling the city's festivities. The misguided vigilante, playing cop with a stolen gun and uniform, has a bank vault full of reasons to put on his own fireworks show... one that will strike dangerously close to Knight's home.",
      popularity: 748.406,
      poster_path: "/jrPKVQGjc3YZXm07OYMriIB47HM.jpg",
      release_date: "2023-01-20",
      title: "Detective Knight: Independence",
      video: false,
      vote_average: 6.1,
      vote_count: 72,
    },
    {
      adult: false,
      backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      genre_ids: [28, 14, 878],
      id: 436270,
      original_language: "en",
      original_title: "Black Adam",
      overview:
        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      popularity: 751.656,
      poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      release_date: "2022-10-19",
      title: "Black Adam",
      video: false,
      vote_average: 7.2,
      vote_count: 4311,
    },
    {
      adult: false,
      backdrop_path: "/afsYFdid9pnnRd6tTrHFUbHgXJn.jpg",
      genre_ids: [878, 28, 12],
      id: 843794,
      original_language: "ko",
      original_title: "정이",
      overview:
        "On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.",
      popularity: 745.006,
      poster_path: "/z2nfRxZCGFgAnVhb9pZO87TyTX5.jpg",
      release_date: "2023-01-20",
      title: "JUNG_E",
      video: false,
      vote_average: 6.3,
      vote_count: 351,
    },
    {
      adult: false,
      backdrop_path: "/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
      genre_ids: [18],
      id: 785084,
      original_language: "en",
      original_title: "The Whale",
      overview:
        "A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.",
      popularity: 738.707,
      poster_path: "/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg",
      release_date: "2022-12-09",
      title: "The Whale",
      video: false,
      vote_average: 8,
      vote_count: 658,
    },
    {
      adult: false,
      backdrop_path: "/a4I481szRmycyreQTLrRe4f4YJe.jpg",
      genre_ids: [80, 53, 18],
      id: 842544,
      original_language: "en",
      original_title: "Transfusion",
      overview:
        "Ryan Logan, a former Special Forces operative, is battling to cope with life after the loss of his wife.  He is thrusted into the criminal underworld to keep his only son from being taken from him.",
      popularity: 666.272,
      poster_path: "/bxh5xCCW9Ynfg6EZJWUkc1zqTnr.jpg",
      release_date: "2023-01-05",
      title: "Transfusion",
      video: false,
      vote_average: 6.6,
      vote_count: 123,
    },
  ],
  total_pages: 37323,
  total_results: 746457,
};
