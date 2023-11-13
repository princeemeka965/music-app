export default function ArtistDisplay(artists: any): string {
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
}
