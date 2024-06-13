/*
The Challenge

We have ﬁve favorite songs named A, B, C, D, and E.
We’ve created a playlist of these songs and are using an app to manage the
playlist.
The songs start oﬀ in the order A, B, C, D, E.
The app has four buttons:

- Button 1: Moves the ﬁrst song of the playlist to the end of the playlist.
For example:
If the playlist is currently A, B, C, D, E,
then it changes to B, C, D, E, A.

- Button 2: Moves the last song of the playlist to the beginning of the
playlist.
For example:
If the playlist is currently A, B, C, D, E,
then it changes to E, A, B, C, D.

- Button 3: Swaps the ﬁrst two songs of the playlist.
For example:
If the playlist is currently A, B, C, D, E,
then it changes to be B, A, C, D, E.

- Button 4: Plays the playlist!

We’re provided a user’s button presses.
When the user presses button 4, output the order of songs in the playlist.

Input

The input consists in a list of strings that represents a move.
like '41' means the user pressed button 4 once, if it was a '12' it means that
the user pressed button 1 twice.
number of a button (1, 2, 3, or 4), and the second gives the number of times 
that the user pressed this button (between 1 and 10).
The input ends with the string '41' indicating that the user pressed button 4
once.

Output

Output the order of songs in the playlist after all button presses.
The output must be a list containing the final order of the songs.
**/
export function getPlaylist(btnPresses) {
  let playlist = ['A', 'B', 'C', 'D', 'E'];
  if (btnPresses[0] === '11') {
    playlist.push(playlist.shift());
    return playlist;
  } else if (btnPresses[0] === '21') {
    playlist.splice(0, 0, playlist.pop());
    return playlist;
  } else if (btnPresses[0] === '31') {
    [playlist[0], playlist[1]] = [playlist[1], playlist[0]];
    return playlist;
  }
  if (btnPresses[0] === '41') {
    return playlist;
  }
}
