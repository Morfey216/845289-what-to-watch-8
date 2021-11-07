const films = [
  {
    'id': 1,
    'name': 'The Grand Budapest Hotel',
    'poster_image': 'img/the-grand-budapest-hotel-poster.jpg',
    'preview_image': 'img/the-grand-budapest-hotel.jpg',
    'background_image': 'img/the-grand-budapest-hotel-bg.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'preview_video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&rsquo;s friend and protege.',
    'rating': 8.9,
    'scores_count': 240,
    'director': 'Wes Anderson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    'run_time': 99,
    'genre': 'Comedy',
    'released': 2014,
    'is_favorite': false,
  },
  {
    'id': 2,
    'name': 'Fantastic Beasts: The Crimes of Grindelwald',
    'poster_image': 'img/the-grand-budapest-hotel-poster.jpg',
    'preview_image': 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    'background_image': 'img/the-grand-budapest-hotel-bg.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'preview_video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'Fantastic Beasts: The Crimes of Grindelwald',
    'rating': 8.9,
    'scores_count': 240,
    'director': 'Wes Anderson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    'run_time': 99,
    'genre': 'Comedy',
    'released': 2014,
    'is_favorite': false,
  },
  {
    'id': 3,
    'name': 'Bohemian Rhapsody',
    'poster_image': 'img/bohemian-rhapsody.jpg',
    'preview_image': 'img/bohemian-rhapsody.jpg',
    'background_image': 'img/the-grand-budapest-hotel-bg.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'preview_video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'Bohemian Rhapsody',
    'rating': 8.9,
    'scores_count': 240,
    'director': 'Wes Anderson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    'run_time': 99,
    'genre': 'Comedy',
    'released': 2014,
    'is_favorite': false,
  },
  {
    'id': 4,
    'name': 'Macbeth',
    'poster_image': 'img/macbeth.jpg',
    'preview_image': 'img/macbeth.jpg',
    'background_image': 'img/the-grand-budapest-hotel-bg.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'preview_video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'Macbeth',
    'rating': 8.9,
    'scores_count': 240,
    'director': 'Wes Anderson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    'run_time': 99,
    'genre': 'Comedy',
    'released': 2014,
    'is_favorite': false,
  },
  {
    'id': 5,
    'name': 'We need to talk about Kevin',
    'poster_image': 'img/we-need-to-talk-about-kevin.jpg',
    'preview_image': 'img/we-need-to-talk-about-kevin.jpg',
    'background_image': 'img/the-grand-budapest-hotel-bg.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'preview_video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'We need to talk about Kevin',
    'rating': 8.9,
    'scores_count': 240,
    'director': 'Wes Anderson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    'run_time': 99,
    'genre': 'Comedy',
    'released': 2014,
    'is_favorite': false,
  },
  {
    'id': 6,
    'name': 'What We Do in the Shadows',
    'poster_image': 'img/what-we-do-in-the-shadows.jpg',
    'preview_image': 'img/what-we-do-in-the-shadows.jpg',
    'background_image': 'img/the-grand-budapest-hotel-bg.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'preview_video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'What We Do in the Shadows',
    'rating': 8.9,
    'scores_count': 240,
    'director': 'Wes Anderson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    'run_time': 99,
    'genre': 'Comedy',
    'released': 2014,
    'is_favorite': false,
  },
  {
    'id': 7,
    'name': 'Johnny English',
    'poster_image': 'img/johnny-english.jpg',
    'preview_image': 'img/johnny-english.jpg',
    'background_image': 'img/the-grand-budapest-hotel-bg.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'preview_video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'Johnny English',
    'rating': 8.9,
    'scores_count': 240,
    'director': 'Wes Anderson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    'run_time': 99,
    'genre': 'Comedy',
    'released': 2014,
    'is_favorite': false,
  },
  {
    'id': 8,
    'name': 'Snatch',
    'poster_image': 'iimg/snatch.jpg',
    'preview_image': 'img/snatch.jpg',
    'background_image': 'img/the-grand-budapest-hotel-bg.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'preview_video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'Snatch',
    'rating': 8.9,
    'scores_count': 240,
    'director': 'Wes Anderson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    'run_time': 99,
    'genre': 'Comedy',
    'released': 2014,
    'is_favorite': false,
  },
];

export {films};
