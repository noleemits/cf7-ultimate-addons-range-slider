jQuery(document).ready(function ($) {
    // Utility function to format numbers with commas
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  
    // Function to apply formatting to all sliders on page load
    function applyInitialCommaFormatting() {
        $('.uacf7-slider.uacf7-range').each(function () {
            var formattedValue = numberWithCommas($(this).val());
            $(this).parent().parent().find('.uacf7-value').html(formattedValue);
        });
    }
  
    // Apply initial formatting
    applyInitialCommaFormatting();
  
    // Listen to input event to format the value dynamically
    $(document).on('input', '.uacf7-slider.uacf7-range', function(){ 
        var formattedValue = numberWithCommas($(this).val());
        $(this).parent().parent().find('.uacf7-value').html(formattedValue);
    });
  });
  
  
  //End of custom function
