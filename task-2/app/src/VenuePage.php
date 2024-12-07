<?php

namespace App;

use Page;
use SilverStripe\ORM\DataList;

class VenuePage extends Page
{
    public function getVenues(): DataList
    {
        return Venue::get();
    }
}
