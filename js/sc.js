var Imployee = function() {
  this.name = 'xxx';
  this.lName = 'yyy';
};

Imployee.prototype.setName = function(name) {
  this.name = name;
  return this;
};


Imployee.prototype.setLastName = function(lname) {
  this.lName = lname;
  return this;
};

Imployee.prototype.save = function() {
  console.log(
    'saving ' + this.name + ' ' + this.lName + ' in  employee table...'
  );
  // save to database here...
  return this;
};

new Imployee().setName('Anas')
              .setLastName('Alpue')
              .save();



//<input type="file" id="file-input" multiple>
 //send files by ajax
 var files;
 var fdata = new FormData(); //FormData Object
 $("#file-input").on("change", function (e) {
     files = this.files;
     $.each(files, function (i, file) {
         fdata.append("file" + i, file);
     });
     fdata.append("FullName", "John Doe");
     fdata.append("Gender", "Male");
     fdata.append("Age", "24");

     $.ajax({
         url: "/Test/Url",
         type: "post",
         data: fdata, //add the FormData object to the data parameter
         processData: false, //tell jquery not to process data
         contentType: false, //tell jquery not to set content-type
         success: function (response, status, jqxhr) {
             //handle success
         },
         error: function (jqxhr, status, errorMessage) {
             //handle error
            }
      });
});


//navbar toggler actions
//add listener to check box in toggler
$('.toggler').find('input').on('change',function(event){

  let checked=event.target.checked;
  if(checked)
    $('.navbar .collapse').fadeIn();
  else
    $('.navbar .collapse').fadeOut();
      

});