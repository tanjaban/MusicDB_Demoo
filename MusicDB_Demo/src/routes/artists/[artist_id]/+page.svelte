<script>
  import axios from 'axios';
  export let data;
  
  let artist = data.artist;

  function updateArtist() {
    axios
      .put("/api/artists/" + artist._id, artist)
      .then((response) => {
        alert("Artist updated");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }
</script>

<h1>Artist (ID: {artist._id})</h1>
<a href="/artists">Back</a>
<!-- <div class="mt-3">
  <p>Name: {artist.name}</p>
  <p>Origin: {artist.origin}</p>
</div>
 -->
<div class="mt-3 mb-3">
  <label class="form-label" for="name">Name</label>
  <input class="form-control" id="name" bind:value={artist.name} />
</div>
<div class="mt-3 mb-3">
  <label class="form-label" for="origin">Origin</label>
  <input class="form-control" id="origin" bind:value={artist.origin} />
</div>
<button class="btn btn-primary" on:click={updateArtist}>Update</button>