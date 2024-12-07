<?php

namespace App;

use SilverStripe\ORM\DataObject;
use SilverStripe\Assets\Image;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\NumericField;
use SilverStripe\AssetAdmin\Forms\UploadField;

class Venue extends DataObject
{
    private static $table_name = 'Venue';

    private static $db = [
        'Name' => 'Varchar(255)',
        'Address' => 'Varchar(255)', 
        'Capacity' => 'Int',
        'ShortDescription' => 'Text',
    ];

    private static $has_one = [
        'VenueImage' => Image::class,
    ];

    private static $owns = [
        'VenueImage',
    ];

    public function getCMSFields()
    {
        return FieldList::create(
            TextField::create('Name', 'Venue Name'),
            TextField::create('Address', 'Address'),
            NumericField::create('Capacity', 'Capacity'),
            TextareaField::create('ShortDescription', 'Short Description'),
            UploadField::create('VenueImage', 'Venue Image')
                ->setFolderName('VenueImages')
        );
    }
}
