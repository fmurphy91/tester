$(function() {
  $('#pictureInput').on('change', function(event) {
    var files = event.target.files;
    var image = files[0]

    // here's the file size
    //console.log(image.size);
    var reader = new FileReader();
    reader.onload = function(file) {
      var img = new Image();
      img.height = 200;
      img.width = 200;
      console.log(file);
      img.src = file.target.result;
      $('#target').html(img);
    }
    reader.readAsDataURL(image);
    console.log(files);
  });
});
