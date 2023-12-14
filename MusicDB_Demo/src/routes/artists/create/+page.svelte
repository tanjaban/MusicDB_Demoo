<script>
  import axios from "axios";

  let artist = {
    name: "",
    origin: "",
  };

  function addArtist() {
    axios
      .post("/api/artists", artist)
      .then((response) => {
        alert("Artist added");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }
</script>

<h1>Add an artist</h1>

<form>
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input class="form-control" type="text" bind:value={artist.name} />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Origin</label>
    <input class="form-control" type="text" bind:value={artist.origin} />
  </div>
  <button on:click={addArtist} type="button" class="btn btn-primary">
    Add Artist
  </button>
</form>
