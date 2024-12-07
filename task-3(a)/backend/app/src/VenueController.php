<?php

namespace App\Controller;

use SilverStripe\Control\Controller;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use App\Venue;

class VenueController extends Controller
{
    private static $allowed_actions = ['index'];

    public function index(HTTPRequest $request)
    {
        // Retrieve all Venue objects
        $venues = Venue::get();

        // Build an array of venue data
        $venueData = [];
        foreach ($venues as $venue) {
            $venueData[] = [
                'Name' => $venue->Name,
                'Address' => $venue->Address,
                'Capacity' => $venue->Capacity,
                'ShortDescription' => $venue->ShortDescription,
                'VenueImageURL' => $venue->VenueImage()->exists() ? $venue->VenueImage()->getAbsoluteURL() : null

            ];
        }

        // Convert the array to JSON
        $json = json_encode($venueData);

        // Return a HTTPResponse with the correct headers
        $response = HTTPResponse::create($json);
        $response->addHeader('Content-Type', 'application/json');
        $response->addHeader('Access-Control-Allow-Origin', '*'); // for CORS if your React app is on a different domain
        return $response;
    }
}
