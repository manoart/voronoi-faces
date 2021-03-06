// Generated by CoffeeScript 1.7.1
(function() {
  $(document).ready(function() {
    var areas, names;
    names = $('#names li');
    areas = $('#facemap area');
    names.each(function(index, name) {
      return $(name).hover((function() {
        var area, offset, pointer, radius, x, y;
        $(this).addClass('highlight');
        pointer = $('#pointer');
        radius = Math.floor(pointer.width() / 2);
        offset = $('#faces').offset();
        area = $('#facemap area[data-id="' + index + '"]');
        x = parseInt(area.attr('data-x'));
        y = parseInt(area.attr('data-y'));
        return pointer.css({
          visibility: "visible",
          left: offset.left + x - radius,
          top: offset.top + y - radius
        });
      }), (function() {
        $('#pointer').css({
          visibility: "hidden"
        });
        return $(this).removeClass('highlight');
      }));
    });
    return areas.each(function(index, area) {
      $(area).attr('title', $(names[index]).text());
      return $(area).hover((function() {
        var container, curName;
        curName = $(names[index]);
        curName.addClass('highlight');
        container = $('#names');
        return container.animate({
          scrollTop: curName.offset().top - container.offset().top + container.scrollTop()
        }, 32);
      }), (function() {
        return $(names[index]).removeClass('highlight');
      }));
    });
  });

}).call(this);
