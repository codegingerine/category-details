export const initialStateList = [
  {
    id: "default-item-1",
    value: "Note 1",
    description:
      "Note 1 lorem ipsum",
    link: 'http://www.brodkamusic.com/'
  },
  {
    id: "default-item-2",
    value: "Note 2",
    description: "Note 2 lorem ipsum",
    itemType: "detailed",
    details: [
      {
        detId: "det-item-1",
        detValue: "subnote1",
        link: "https://open.spotify.com/playlist/7H1NnEns9Omuv5ca9q8g5o"
      },
      {
        detId: "det-item-2",
        detValue: "subnote 2",
        link: "https://open.spotify.com/album/0gMu2RaHOW2gOnGohpPMJF",
      }
    ]
  },
];
