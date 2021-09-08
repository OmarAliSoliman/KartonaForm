$(document).ready(function () {
  // choses-slider

  // AOS.init();

  $('.customselect').niceSelect();

  if ($(".image-upload").length) {
    $(document).on("change", ".personal-img-file", function () {
      var uploadFile = $(this);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
      console.log(this.files);
      if (/^image/.test(files[0].type)) {
        // only image file
        var reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(files[0]); // read the local file

        reader.onloadend = function () {
          // set image data as background of div
          //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
          uploadFile
            .closest(".image-upload")
            .find(".file-upload")
            .css("background-image", "url(" + this.result + ")");
        };
      }
    });
  }

});
