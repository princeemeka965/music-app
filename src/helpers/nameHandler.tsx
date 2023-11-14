export const ArtistNames = (artists: any): string => {
  // extract only the artist name

  const filteredNames = artists.map((x: { name: string }) => x.name);

  if (artists.length > 1) {
    const firstArtist = filteredNames.shift();
    const formattedArtists = filteredNames.join(", ");
    const result = `${firstArtist} ft ${formattedArtists}`;
    return result;
  } else {
    return filteredNames[0];
  }
};

export const shortestName = (name: string | undefined): string => {
  if (name) {
    var words = name.split(" ");
    var shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length > shortestWord.length
        ? currentWord
        : shortestWord;
    }, words[0]);
    return shortest;
  }
  return "";
};
