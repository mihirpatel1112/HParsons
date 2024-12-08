<% require themedCSS('venue') %>
<h1 class="page-title">$Name</h1>
<div class="page-content">
    $Content
</div>

<% if $ClassName == 'App\\VenuePage' %>
    <h2 class="venue-heading">Available Venues</h2>
    <% if $Venues %>
       <div class="venue-list">
    <% loop $Venues %>
        <li class="venue-item">
            <% if $VenueImage %>
                <img class="venue-image" src="$VenueImage.ScaleWidth(100).URL" alt="$Name" />
            <% else %>
                <div class="no-image">No image available</div>
            <% end_if %>
            <strong class="venue-title">$Name</strong><br />
            <span class="venue-address">Address: $Address</span><br />
            <span class="venue-capacity">Capacity: $Capacity</span><br />
            <span class="venue-description">Description: $ShortDescription</span><br />
        </li>
    <% end_loop %>
</div>

    <% else %>
        <p class="no-venues">No venues available at this time.</p>
    <% end_if %>
<% end_if %>
