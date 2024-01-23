$(document).ready(function () {
    $(".datepicker").datepicker();
  
    $(".dropdown").click(function () {
        $(".dropdown-content").not($(this).find(".dropdown-content")).hide();
        $(this).find(".dropdown-content").toggle();
    });
  
    $(".dropdown-content span").click(function (event) {
        event.stopPropagation(); // Prevents the click event from reaching the document
  
        var selectedValue = $(this).text();
        var dropdown = $(this).closest(".dropdown");
        dropdown.find("#selectedOption").text(selectedValue);
        dropdown.find(".dropdown-content").hide();
    });
  
    // Function to close dropdowns when clicking outside
    $(document).click(function (event) {
        if (!$(event.target).closest(".dropdown").length) {
            $(".dropdown-content").hide();
        }
    });
  
    // Ensure datepicker is initialized for datepicker-content elements
    $(".datepicker-content").datepicker({
        onSelect: function (dateText, inst) {
            var selectedDate = $(this).datepicker('getDate');
            var formattedDate = $.datepicker.formatDate("dd M yy", selectedDate);
            var dropdown = $(this).closest(".dropdown");
            dropdown.find("span").text(formattedDate);
            dropdown.find(".dropdown-content").hide();
        }
    });
  
    // Prevent hiding the calendar when clicking on it
    $(".datepicker-content").click(function (e) {
        e.stopPropagation();
    });
  
    // Fix for datepicker navigation issue
    $(".ui-datepicker-header").on("click", ".ui-datepicker-prev, .ui-datepicker-next", function () {
        $(this).closest(".datepicker-content").datepicker("hide").datepicker("show");
    });
  });
  
  function search() {
    // Add your search functionality here
    alert("Search button clicked!");
  }
  
  
  
  
  
  