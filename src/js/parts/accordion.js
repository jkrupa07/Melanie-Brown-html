// export class Accordion {
//     init() {
//         this.Accordion();
//     }

//     Accordion() {
//         $(document).ready(function () {
//             // Open the first child by default
//             $('.closet-header').first().addClass('active').next('.closet-content').slideDown();
//             // Handle click events for closet headers
//             $('.closet-header').click(function () {
//                 $(this).toggleClass('active').next('.closet-content').slideToggle();
//                 $('.closet-header').not(this).removeClass('active').next('.closet-content').slideUp();
//             });
//         });
//     }
// }

export class Accordion {
    init() {
        this.Accordion();
    }

    Accordion() {
        $(document).ready(function () {
            // Open only the first item per closet parent
            $('.closet-header').each(function () {
                const $this = $(this);
                const $parent = $this.closest('.closet-item');
                const $container = $parent.parent(); // parent container of closet-items

                // If this is the first closet-item in the container, open it
                if ($parent.is($container.find('.closet-item').first())) {
                    $this.addClass('active');
                    $this.next('.closet-content').slideDown();
                } else {
                    $this.next('.closet-content').hide();
                }
            });

            // Click event
            $('.closet-header').click(function () {
                const $this = $(this);
                const $parent = $this.closest('.closet-item');
                const $container = $parent.parent();

                if ($this.hasClass('active')) {

                    // Close content first, then remove class
                    $this.next('.closet-content').slideUp(400, function () {
                        $this.removeClass('active');
                    });

                } else {

                    // Close others first
                    $container.find('.closet-header.active')
                        .removeClass('active')
                        .next('.closet-content')
                        .slideUp(400);

                    // Then open clicked
                    $this.addClass('active');
                    $this.next('.closet-content').slideDown(400);
                }
            });
        });
    }
}

