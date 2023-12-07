const sport = [
    { value: 'aikido', label: 'Aikido' },
    { value: 'archery', label: 'Archery' },
    { value: 'badminton', label: 'Badminton' },
    { value: 'baseball', label: 'Baseball' },
    { value: 'basketball', label: 'Basketball' },
    { value: 'bmx', label: 'BMX' },
    { value: 'boxing', label: 'Boxing' },
    { value: 'cricket', label: 'Cricket' },
    { value: 'cycling', label: 'Cycling' },
    { value: 'diving', label: 'Diving' },
    { value: 'equestrian', label: 'Equestrian' },
    { value: 'fencing', label: 'Fencing' },
    { value: 'football', label: 'Football' },
    { value: 'golf', label: 'Golf' },
    { value: 'gymnastics', label: 'Gymnastics' },
    { value: 'handball', label: 'Handball' },
    { value: 'ice hockey', label: 'Ice Hockey' },
    { value: 'judo', label: 'Judo' },
    { value: 'karate', label: 'Karate' },
    { value: 'lacrosse', label: 'Lacrosse' },
    { value: 'martial arts', label: 'Martial Arts' },
    { value: 'mountain biking', label: 'Mountain Biking' },
    { value: 'rowing', label: 'Rowing' },
    { value: 'rugby', label: 'Rugby' },
    { value: 'sailing', label: 'Sailing' },
    { value: 'skateboarding', label: 'Skateboarding' },
    { value: 'skiing', label: 'Skiing' },
    { value: 'snowboarding', label: 'Snowboarding' },
    { value: 'soccer', label: 'Soccer' },
    { value: 'surfing', label: 'Surfing' },
    { value: 'swimming', label: 'Swimming' },
    { value: 'table tennis', label: 'Table Tennis' },
    { value: 'taekwondo', label: 'Taekwondo' },
    { value: 'tennis', label: 'Tennis' },
    { value: 'track and field', label: 'Track and Field' },
    { value: 'triathlon', label: 'Triathlon' },
    { value: 'volleyball', label: 'Volleyball' },
    { value: 'water polo', label: 'Water Polo' },
    { value: 'weightlifting', label: 'Weightlifting' },
    { value: 'wrestling', label: 'Wrestling' },
    { value: 'squash', label: 'Squash' },
    { value: 'aerial silks', label: 'Aerial Silks' },
    { value: 'alpine skiing', label: 'Alpine Skiing' },
    { value: 'american football', label: 'American Football' },
    { value: 'archery tag', label: 'Archery Tag' },
    { value: 'artistic swimming', label: 'Artistic Swimming' },
    { value: 'auto racing', label: 'Auto Racing' },
    { value: 'ballet', label: 'Ballet' },
    { value: 'beach volleyball', label: 'Beach Volleyball' },
    { value: 'biathlon', label: 'Biathlon' },
    { value: 'bouldering', label: 'Bouldering' },
    { value: 'bowling', label: 'Bowling' },
    { value: 'broomball', label: 'Broomball' },
    { value: 'canoeing', label: 'Canoeing' },
    { value: 'cheerleading', label: 'Cheerleading' },
    { value: 'climbing', label: 'Climbing' },
    { value: 'crossfit', label: 'CrossFit' },
    { value: 'curling', label: 'Curling' },
    { value: 'darts', label: 'Darts' },
    { value: 'disc golf', label: 'Disc Golf' },
    { value: 'dodgeball', label: 'Dodgeball' },
    { value: 'e-sports', label: 'E-Sports' },
    { value: 'fishing', label: 'Fishing' },
    { value: 'freestyle skiing', label: 'Freestyle Skiing' },
    { value: 'gaelic football', label: 'Gaelic Football' },
    { value: 'handball', label: 'Handball' },
    { value: 'hiking', label: 'Hiking' },
    { value: 'horse racing', label: 'Horse Racing' },
    { value: 'ice climbing', label: 'Ice Climbing' },
    { value: 'kickboxing', label: 'Kickboxing' },
    { value: 'kiteboarding', label: 'Kiteboarding' },
    { value: 'korfball', label: 'Korfball' },
    { value: 'luge', label: 'Luge' },
    { value: 'modern pentathlon', label: 'Modern Pentathlon' },
    { value: 'motorcycle racing', label: 'Motorcycle Racing' },
    { value: 'netball', label: 'Netball' },
    { value: 'paragliding', label: 'Paragliding' },
    { value: 'paddleboarding', label: 'Paddleboarding' },
    { value: 'parkour', label: 'Parkour' },
    { value: 'polo', label: 'Polo' },
    { value: 'powerlifting', label: 'Powerlifting' },
    { value: 'quidditch', label: 'Quidditch' },
    { value: 'rhythmic gymnastics', label: 'Rhythmic Gymnastics' },
    { value: 'rock climbing', label: 'Rock Climbing' },
    { value: 'roller derby', label: 'Roller Derby' },
    { value: 'rugby sevens', label: 'Rugby Sevens' },
    { value: 'synchronized swimming', label: 'Synchronized Swimming' },
    { value: 'tai chi', label: 'Tai Chi' },
    { value: 'team handball', label: 'Team Handball' },
    { value: 'ultimate frisbee', label: 'Ultimate Frisbee' },
    { value: 'volleyball', label: 'Volleyball' },
    { value: 'wakeboarding', label: 'Wakeboarding' },
    { value: 'windsurfing', label: 'Windsurfing' },
    { value: 'yoga', label: 'Yoga' },
    { value: 'airsoft', label: 'Airsoft' },
    { value: 'bocce ball', label: 'Bocce Ball' },
    { value: 'canicross', label: 'Canicross' },
    { value: 'cyclocross', label: 'Cyclocross' },
    { value: 'dune bashing', label: 'Dune Bashing' },
    { value: 'equestrian vaulting', label: 'Equestrian Vaulting' },
    { value: 'falconry', label: 'Falconry' },
    { value: 'footgolf', label: 'Footgolf' },
    { value: 'futsal', label: 'Futsal' },
    { value: 'handball', label: 'Handball' },
    { value: 'hurdles', label: 'Hurdles' },
    { value: 'kayaking', label: 'Kayaking' },
    { value: 'laser tag', label: 'Laser Tag' },
    { value: 'mob football', label: 'Mob Football' },
    { value: 'pétanque', label: 'Pétanque' },
    { value: 'platform tennis', label: 'Platform Tennis' },
    { value: 'rogaining', label: 'Rogaining' },
    { value: 'skeleton racing', label: 'Skeleton Racing' },
    { value: 'slacklining', label: 'Slacklining' },
    { value: 'snowkiting', label: 'Snowkiting' },
    { value: 'speed skating', label: 'Speed Skating' },
    { value: 'spelunking', label: 'Spelunking' },
    { value: 'sprint triathlon', label: 'Sprint Triathlon' },
    { value: 'street hockey', label: 'Street Hockey' },
    { value: 'tchoukball', label: 'Tchoukball' },
    { value: 'telemark skiing', label: 'Telemark Skiing' },
    { value: 'tetherball', label: 'Tetherball' },
    { value: 'trapeze', label: 'Trapeze' },
    { value: 'tug of war', label: 'Tug of War' },
    { value: 'ultramarathon', label: 'Ultramarathon' },
    { value: 'underwater hockey', label: 'Underwater Hockey' },
    { value: 'urban golf', label: 'Urban Golf' },
    { value: 'varzesh-e bastani', label: 'Varzesh-e Bastani' },
    { value: 'video gaming', label: 'Video Gaming' },
    { value: 'vintage baseball', label: 'Vintage Baseball' },
    { value: 'wallball', label: 'Wallball' },
    { value: 'wheelchair basketball', label: 'Wheelchair Basketball' },
    { value: 'wood chopping', label: 'Wood Chopping' },
    { value: 'xare', label: 'Xare' },
    { value: 'yachting', label: 'Yachting' },
    { value: 'aerial hoop', label: 'Aerial Hoop' },
    { value: 'barefoot skiing', label: 'Barefoot Skiing' },
    { value: 'bike polo', label: 'Bike Polo' },
    { value: 'dog agility', label: 'Dog Agility' },
    { value: 'freerunning', label: 'Freerunning' },
    { value: 'kabaddi', label: 'Kabaddi' },
    { value: 'kayak polo', label: 'Kayak Polo' },
    { value: 'paddle tennis', label: 'Paddle Tennis' },
    { value: 'roller skiing', label: 'Roller Skiing' },
    { value: 'slackline football', label: 'Slackline Football' },
    { value: 'synchronized ice skating', label: 'Synchronized Ice Skating' },
    { value: 'sled dog racing', label: 'Sled Dog Racing' },
    { value: 'cave diving', label: 'Cave Diving' },
    { value: 'hula hooping', label: 'Hula Hooping' },
    { value: 'log rolling', label: 'Log Rolling' },
    { value: 'unicycling', label: 'Unicycling' },
    { value: 'cliff diving', label: 'Cliff Diving' },
    { value: 'street workout', label: 'Street Workout' },
    { value: 'tango dancing', label: 'Tango Dancing' },
    { value: 'underwater rugby', label: 'Underwater Rugby' },
    { value: 'zorbing', label: 'Zorbing' },
    { value: 'zumba', label: 'Zumba' },
  ]

  const sportsOptions = sport.sort((a, b) => a.label.localeCompare(b.label));

  export default sportsOptions;