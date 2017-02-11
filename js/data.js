var data = {
  'names': [
    'brad', 'janet', 'riffraff', 'magenta', 'columbia', 'frank', 'rocky',
    'eddie', 'dr scott', 'the crim',
    'buffy', 'xander', 'willow', 'cordelia', 'rupert', 'oz',
    'spike', 'riley', 'anya', 'dawn', 'tara',
    'offred', 'fred', 'serena', 'ofglen', 'nick', 'moira', 'luke',
    'hp', 'harmony', 'the bear', 'upfish', 'woodpile', 'dazzler',
    'catface', 'hardcastle', 'hagar', 'facer', 'monster mash', 'otterpop',
    'tony the shrimp', 'yellow', 'zoomacroom',
    'varla', 'rosie', 'billie', 'linda', 'kirk', 'tommy',
  ],

  'playbooks': [
    {
      'name': 'angel',
      'stats': [[1, 0, 1, 2, -1], [1, 1, 0, 2, -1], [-1, 1, 0, 2, 1], [2, 0, -1, 2, -1]],
      'num_moves': 2,
      'set_moves': [],
      'moves': [
        'sixth sense',
        'infirmary',
        'professional compassion',
        'battlefield grace',
        'healing touch',
        'touched by death',
      ],
      'items': [
        [1, ['angel kit']],
        [1, ['oddments x2']],
        [1, ['.38 revolver', '9mm', 'big knife', 'sawed-off', 'stun gun']],
        [1, ['1-armor fashion']],
      ],
      'face': ['kind', 'strong', 'rugged', 'haggard', 'pretty', 'lively'],
      'eyes': ['quick', 'hard', 'caring', 'bright', 'laughing', 'clear'],
      'body': ['compact', 'stout', 'spare', 'big', 'rangy', 'sturdy'],
      'style': ['utility wear', 'casual wear', 'scrounge wear'],
    },
    {
      'name': 'battlebabe',
      'stats': [[3, -1, 1, 1, 0], [3, -1, 2, 0, -1], [3, -2, 1, 1, 1], [3, 0, 1, 1, -1]],
      'num_moves': 2,
      'set_moves': [],
      'moves': [
        'dangerous & sexy',
        'ice cold',
        'merciless',
        'visions of death',
        'perfect instincts',
        'impossible reflexes',
      ],
      'items': [
        [1, ['custom handgun', 'custom shotgun', 'custom rifle', 'custom crossbow'], ['custom_firearm']],
        [1, ['custom staff', 'custom haft', 'custom handle', 'custom chain'], ['custom_hand']],
        [1, ['1-armor fashion', '2-armor body armor']],
        [1, ['oddments x4']],
      ],
      'face': ['smooth', 'sweet', 'handsome', 'sharp', 'girlish', 'boyish', 'striking'],
      'eyes': ['calculating', 'merciless', 'frosty', 'arresting', 'indifferent'],
      'body': ['sweet', 'slim', 'gorgeous', 'muscular', 'angular'],
      'style': ['formal wear', 'display wear', 'luxe wear', 'casual wear', 'showy armor'],
    },
    {
      'name': 'brainer',
      'stats': [[1, 1, -2, 1, 2], [0, 0, 1, 0, 2], [1, -2, -1, 2, 2], [2, -1, -1, 0, 2]],
      'num_moves': 2,
      'set_moves': [],
      'moves': [
        'unnatural lust transfixion',
        'casual brain receptivity',
        'deep brain scan',
        'direct-brain whisper projection',
        'in-brain puppet strings',
      ],
      'items': [
        [1, ['silenced 9mm', 'ornate dagger', 'hidden knives', 'scalpels', 'antique handgun']],
        [2, ['implant syringe', 'brain relay', 'receptivity drugs', 'violation glove', 'pain-wave projector', 'deep ear plugs']],
        [1, ['oddments x8']],
        [1, ['1-armor fashion']],
      ],
      'face': ['scarred', 'smooth', 'pale', 'bony', 'plump moist', 'sweet'],
      'eyes': ['soft', 'dead', 'deep', 'caring', 'pale', 'ruined', 'wet'],
      'body': ['awkward angular', 'soft', 'slight', 'crippled', 'fat'],
      'style': ['high formal wear', 'clinical wear', 'fetish wear', 'environmental wear'],
    },
    {
      'name': 'chopper',
      'stats': [[1, 2, -1, 1, 0], [1, 2, 1, 0, -1], [1, 2, 0, 1, -1], [2, 2, -1, 0, -1]],
      'num_moves': 0,
      'set_moves': ['pack alpha', 'fucking thieves'],
      'moves': [],
      'items': [
        [1, ['bike'], ['bike_strengths', 'bike_looks', 'bike_weakness']],
        [1, ['gang']],
        [2, ['magnum', 'smg', 'sawed-off', 'crowbar', 'machete', 'crossbow', 'wrist crossbow']],
        [1, ['oddments x2']],
        [1, ['1-armor fashion']],
      ],
      'face': ['weathered', 'strong', 'rugged', 'narrow', 'busted'],
      'eyes': ['narrow', 'scorched', 'calculating', 'weary', 'kind'],
      'body': ['squat', 'rangy', 'wiry', 'sturdy', 'fat'],
      'style': ['combat biker wear', 'showy biker wear', 'scrounge biker wear', 'S&M biker wear'],
    },
    {
      'name': 'driver',
      'stats': [[2, -1, 1, 1, 0], [2, 0, 1, 1, -1], [2, 1, -1, 0, 1], [2, -2, 0, 2, 1]],
      'num_moves': 2,
      'set_moves': [],
      'moves': [
        'combat driver',
        'eye on the door',
        'weather eye',
        'reputation',
        'daredevil',
        'collector',
        'my other car is a tank',
      ],
      'items': [
        [1, ['bike', 'compact', 'coupe', 'semi'], ['car_strengths', 'car_looks', 'car_weakness']],
        [1, ['.38 revolver', '9mm', 'big knife', 'sawed-off', 'machete', 'magnum']],
        [1, ['oddments x4']],
        [1, ['1-armor fashion']],
      ],
      'face': ['handsome', 'gorgeous', 'stern', 'fine-boned', 'worn', 'crooked'],
      'eyes': ['cool', 'hooded', 'hard', 'sad', 'cold', 'pale'],
      'body': ['slim', 'pudgy', 'stocky', 'solid', 'tall', 'strong'],
      'style': ['vintage wear', 'casual wear', 'utility wear', 'leather wear', 'showy scrounge wear'],
    },
    {
      'name': 'gunlugger',
      'stats': [[1, 2, -1, 1, 0], [-1, 2, -2, 1, 2], [1, 2, -2, 2, -1], [2, 2, -2, 0, 0]],
      'num_moves': 3,
      'set_moves': [],
      'moves': [
        'battle-hardened',
        'fuck this shit',
        'battlefield instincts',
        'insano like drano',
        'prepared for the inevitable',
        'bloodcrazed',
        'not to be fucked with',
      ],
      'items': [
        [1, ['silenced sniper rifle', 'mg', 'assault rifle', 'grenade launcher']],
        [2, ['hunting rifle', 'shotgun', 'smg', 'magnum', 'grenade tube', 'ap ammo', 'silencer']],
        [1, ['9mm', 'big-ass knife', 'machete', 'many knives', 'grenades']],
        [1, ['2-armor armor']],
        [1, ['oddments x2']],
      ],
      'face': ['scarred', 'blunt', 'bony', 'dull', 'worn', 'blasted'],
      'eyes': ['mad', 'raging', 'wise', 'sad', 'little piggy', 'cunning'],
      'body': ['hard', 'stocky', 'stringy', 'battered', 'overbuilt', 'compact', 'huge'],
      'style': ['scrounged mismatched armor', 'battered old armor', 'custom homemade armor'],
    },
    {
      'name': 'hardholder',
      'stats': [[-1, 2, 1, 1, 0], [1, 2, 1, 1, -2], [-2, 2, 0, 2, 0], [0, 2, 1, -1, 1]],
      'num_moves': 0,
      'set_moves': ['leadership', 'wealth'],
      'moves': [],
      'items': [
        [1, ['holding']],
      ],
      'face': ['strong', 'stern', 'cruel', 'soft', 'aristocratic', 'gorgeous'],
      'eyes': ['cool', 'commanding', 'languid', 'sharp', 'forgiving', 'generous'],
      'body': ['massive', 'soft', 'wiry', 'fat', 'tall spare', 'sensual'],
      'style': ['luxe wear', 'display wear', 'fetish wear', 'casual wear', 'junta wear'],
    },
    {
      'name': 'hocus',
      'stats': [[0, 1, -1, 1, 2], [1, -1, 1, 0, 2], [-1, 1, 0, 1, 2], [1, 0, 1, -1, 2]],
      'num_moves': 2,
      'set_moves': ['fortunes'],
      'moves': ['frenzy', 'charismatic', 'fucking wacknut', 'seeing souls', 'divine protection'],
      'items': [
        [1, ['followers']],
        [1, ['fashion']],
        [1, ['oddments x4']],
      ],
      'face': ['innocent', 'dirty', 'determined', 'open', 'severe', 'ascetic'],
      'eyes': ['mesmerizing', 'dazed', 'forgiving', 'suspicious', 'clear', 'burning'],
      'body': ['bony', 'lanky', 'soft', 'fit', 'graceful', 'fat'],
      'style': ['tattered vestments', 'formal vestments', 'scrounge vestments', 'fetish vestments', 'tech vestments'],
    },
    {
      'name': "maestro d'",
      'stats': [[1, -1, 2, 0, 1], [0, 1, 2, 1, -1], [-1, 2, 2, 0, -1], [0, 0, 2, 1, 0]],
      'num_moves': 2,
      'set_moves': [],
      'moves': [
        'you call this hot?',
        'a devil with a blade',
        'fingers in every pie',
        'everybody eats, even that guy',
        'just give me a motive',
      ],
      'items': [
        [1, ['establishment']],
        [1, ['wicked blade']],
        [1, ['oddments x2']],
        [1, ['1-armor fashion']],
      ],
      'face': ['pinched', 'boyish', 'pretty', 'expressive', 'full', 'tattooed', 'porcelain', 'scarred'],
      'eyes': ['cool', 'bright', 'inquisitive', 'frank', 'mischievous', 'one'],
      'body': ['fat', 'restless', 'stubby', 'curvy', 'unusual', 'lean'],
      'style': ['casual wear', 'display wear', 'vintage wear', 'butcher wear', 'fetish wear', 'immaculate whites'],
    },
    {
      'name': 'savvyhead',
      'stats': [[-1, 0, 1, 1, 2], [0, -1, -1, 2, 2], [1, -1, 0, 1, 2], [1, 1, -1, 0, 2]],
      'num_moves': 2,
      'set_moves': [],
      'moves': [
        'bonefeel',
        'oftener right',
        "reality's fraying edge",
        'spooky intense',
        'deep insights',
      ],
      'items': [
        [1, ['workspace']],
        [1, ['fashion']],
        [1, ['oddments x6']],
        [3, ['.38 revolver', '9mm', 'hunting rifle', 'magnum', 'sawed off', 'shotgun', 'sleeve pistol', 'smg', 'big knife', 'crowbar', 'grenades', 'kitchen knife', 'machete', 'many knives', 'stun gun']],
      ],
      'face': ['plain', 'pretty', 'open', 'expressive'],
      'eyes': ['squinty', 'calm', 'dancing', 'quick', 'appraising'],
      'body': ['fat', 'slight', 'hunched', 'wiry', 'stumpy', 'strange'],
      'style': ['utility wear + tech', 'scrounge wear + tech', 'vintage wear + tech', 'tech wear'],
    },
    {
      'name': 'skinner',
      'stats': [[1, -1, 2, 1, 0], [0, 0, 2, 0, 1], [-1, 0, 2, 2, -1], [1, 1, 2, 1, -2]],
      'num_moves': 2,
      'set_moves': [],
      'moves': [
        'breathtaking',
        'lost',
        'artful & gracious',
        'an arresting skinner',
        'hypnotic',
      ],
      'items': [
        [1, ['sleeve pistol', 'ornate dagger', 'hidden knives', 'ornate sword', 'antique handgun']],
        [2, ['antique coins', 'eyeglasses', 'long gorgeous coat', 'spectacular tattoos', 'skin & hair kit', 'pet']],
        [1, ['oddments x2']],
        [1, ['fashion']],
      ],
      'face': ['striking', 'sweet', 'strange', 'cute', 'beautiful'],
      'eyes': ['laughing', 'mocking', 'dark', 'shadowed', 'troubled', 'arresting', 'bright', 'cool'],
      'hands': ['strong', 'expressive', 'quick', 'calloused', 'steady'],
      'body': ['slim', 'toned', 'fat', 'unnatural', 'young', 'lush'],
      'style': ['display wear', 'showy scrounge wear', 'luxe wear', 'fetish wear', 'casual wear'],
    }
  ],

  'mods': {
    'custom_firearm': [
      [2, ['ornate', 'antique', 'semiautomatic', '3-round burst', 'automatic', 'silenced', 'hi-powered', 'ap ammo', 'scoped', 'big']]
    ],
    'custom_hand': [
      [2, ['ornate', 'antique', 'head', 'spikes', 'blade', 'hidden']],
      [1, ['long blade', 'heavy blade', 'blades']],
    ],
    'bike_strengths': [[2, ['fast', 'rugged', 'aggressive', 'tight', 'huge', 'responsive']]],
    'bike_looks': [[2, ['sleek', 'vintage', 'massively chopped', 'roaring', 'fat-ass', 'muscular', 'flashy', 'luxe']]],
    'bike_weakness': [[1, ['slow', 'sloppy', 'guzzler', 'skinny', 'buckling', 'lazy', 'unreliable']]],
    'car_strengths': [[2, ['fast', 'rugged', 'aggressive', 'tight', 'huge', 'off-road', 'responsive', 'uncomplaining', 'capacious', 'workhorse', 'easily-repaired']]],
    'car_looks': [[2, ['sleek', 'vintage', 'pristine', 'powerful', 'luxe', 'flashy', 'muscular', 'quirky', 'pretty', 'handcrafted', 'spikes & plates', 'garish']]],
    'car_weakness': [[1, ['slow', 'loud', 'lazy', 'sloppy', 'cramped', 'picky', 'guzzler', 'unreliable', 'rabbity']]],
  },
};
