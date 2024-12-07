<?php

namespace App;

use SilverStripe\Admin\ModelAdmin;

class VenueAdmin extends ModelAdmin
{
    private static $managed_models = [
        Venue::class,
    ];

    private static $url_segment = 'venues';

    private static $menu_name = 'Venues';
}
