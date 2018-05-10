const initState = {
  hadiths: {
    house1: {
      id: 'house1',
      title: 'Avoir une maison au paradis',
      description: 'Récitez la sourate "Qul Huwa Allâhu Ahad"',
      hadith: `D'après Mu'âdh Ibn Anas ( رضي الله عنه), le Prophète (صلى الله عليه و سلم) a dit: « Celui qui lit : « Qul Huwa Allâhu Ahad » (S.112) dix fois, Allâh lui construit une maison au Paradis ».
(Rapporté par Ahmad et authentifié par Shaykh Al-Albânî dans Sahîh Al-Jâmi' n°6472)`,
      validationRate: 10,
      listRewards: [{ idRewards: '', numberRewardCorresponding: '' }],
    },
    tree1: {
      id: 'tree1',
      title: 'Avoir des arbres au paradis',
      description:
        'Dites "Subhâna Allâh" ou "Al-HamdulilLâh" ou "Lâ ilâha illâ Allâh" ou "Allâhu Akbar"',
      hadith: `D'après Ibn 'Abbâs ( رضي الله عنهما), le Prophète (صلى الله عليه و سلم) a dit: « Celui qui dit: « Subhâna Allâh, Al-HamdulilLâh, Lâ ilâha illâ Allâh, Allâhu Akbar. » Il lui est planté pour chacune de ces paroles un arbre dans le Paradis ».
(Rapporté par At-Tabarânî et authentifié par Shaykh Al-Albânî dans As-Silsilah As-Sahîhah n°2880)`,
      validationRate: 1,
      listRewards: [{ idRewards: '', numberRewardCorresponding: '' }],
    },
    tree2: {
      id: 'tree2',
      title: 'Avoir un palmier au paradis',
      description: 'Dites "Subhâna Allâhi wa bihamdihi"',
      hadith:
        'Selon Jâbir ( رضي الله عنه), le Prophète ( صلى الله عليه و سلم) a dit : « Quiconque dit Subhâna Allâhi wa bihamdihi aura au Paradis un palmier planté à son intention. » (Rapporté par At-Tirmidhî)',
      validationRate: 1,
      listRewards: [{ idRewards: '', numberRewardCorresponding: '' }],
    },
    hassanats1: {
      id: 'hassanats1',
      title: 'Gagner 1000 hassanates, enlever 1000 péchés',
      description: 'Dites "Subhâna Allâh"',
      hadith: `D'après Sa'd Ibn Abî Waqâs ( رضي الله عنه), nous étions auprès du Prophète ( صلى الله عليه و سلم) lorsqu'il a dit: « L'un de vous n'est-il pas capable de gagner chaque jours 1000 bonnes actions ? ».
Un homme a dit: Ô Messager d'Allâh ! Comment l'un d'entre nous peut-il gagner 1000 bonnes actions ?
Le Prophète ( صلى الله عليه و سلم) a dit: « Il fait 100 tasbîh (Subhâna Allâh) et il lui est inscrit 1000 hassanât ou il lui est enlevé 1000 péchés ».
(Rapporté par Muslim dans son Sahîh n°2698)
`,
      validationRate: 100,
      listRewards: [{ idRewards: '', numberRewardCorresponding: '' }],
    },
    treasure1: {
      id: 'treasure1',
      title: 'Avoir un trésor du paradis',
      description: 'Dites "Lâ Hawla Wa Lâ Qûwata Illâ BilLâh."',
      hadith: `D'après Abû Mûsa (رضي الله عنه) , le Prophète (صلى الله عليه و سلم) m'a dit : « T'indiquerais-je un des trésors du Paradis ? » - « Oui bien sûr, ô Messager d'Allâh ». « Dis : Lâ Hawla Wa Lâ Qûwata Illâ BilLâh. »
(Rapporté par Al-Bukhârî et Muslim)`,
      validationRate: 1,
      listRewards: [{ idRewards: '', numberRewardCorresponding: '' }],
    },
    quran1: {
      id: 'quran1',
      title: 'Lire le Coran en entier',
      description: 'Récitez la sourate "Qul Huwa Allâhu Ahad"',
      hadith: `D'après Ibn 'Abbâs (رضي الله عنهما), le Prophète (صلى الله عليه وسلم) a dit « 'Qul Huwa Allâhu Ahad' équivaut au tiers du Qur'ân et 'Qul Yâ Ayyuhâ Al-Kâfirûn' équivaut au quart du Qur'ân.»
(Rapporté par At-Tirmidhî et authentifié par Shaykh Al-Albânî dans Sahîh At-Targhîb n°1477)`,
      validationRate: 3,
      listRewards: [{ idRewards: '', numberRewardCorresponding: '' }],
    },
    quran2: {
      id: 'quran2',
      title: 'Lire le Coran en entier (2)',
      description: 'Récitez la sourate "Qul Yâ Ayyuhâ Al-Kâfirûn"',
      hadith: `D'après Ibn 'Abbâs (رضي الله عنهما), le Prophète (صلى الله عليه وسلم) a dit « 'Qul Huwa Allâhu Ahad' équivaut au tiers du Qur'ân et 'Qul Yâ Ayyuhâ Al-Kâfirûn' équivaut au quart du Qur'ân.»
(Rapporté par At-Tirmidhî et authentifié par Shaykh Al-Albânî dans Sahîh At-Targhîb n°1477)`,
      validationRate: 4,
      listRewards: [{ idRewards: '', numberRewardCorresponding: '' }],
    },
  },
  rewards: {},
  counters: {
    house1: 0,
    tree1: 0,
    tree2: 0,
    hassanats1: 0,
    treasure1: 0,
    quran1: 0,
    quran2: 0,
  },
};

export default initState;
