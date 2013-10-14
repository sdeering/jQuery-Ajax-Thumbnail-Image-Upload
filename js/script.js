
(function($)
{

    $(document).ready(function()
    {
          //BSA
          setTimeout(function()
          {
              var close = '<a href="#" class="close_bsap">X</a>';
              $('.bsap .bsa_it').prepend(close);
              $('.close_bsap').live('click', function(e)
              {
                  e.preventDefault();
                  $(this).closest('.bsap').hide();
              });
          }, 1500);

    });

})(jQuery);