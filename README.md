# Cocktail Party

## Description

This app lets users explore random cocktails from TheCocktailDB API and ban certain attributes like ingredients, alcohol type, or glass type to refine future results. It also shows a history of viewed cocktails during the session.

## Main features

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The app consistently displays the drink name, alcohol content, glass type, and one ingredient.
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single cocktail is shown at a time with a preview image.
- [x] **API call response results should appear random to the user**
  - Each button click fetches a new random cocktail using the random endpoint from TheCocktailDB.
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - Each attribute is clickable and can be added to the ban list instantly.
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
- The app continues fetching until it finds a cocktail that does not contain any banned attributes.
- [x] Multiple types of attributes are clickable and can be added to the ban list
- [x] Users can see a stored history of their previously displayed results from this session
  - The left panel shows a list of all cocktail names viewed so far.

## Additional Features

- [x] Includes a fun rotating “Cocktail me!” button with a curved arrow SVG and a concierge bell icon using FontAwesome
- [x] Banned attributes can be removed from the ban list with one click
- [x] Loading spinner using a custom GIF is shown while cocktails are fetched

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<div>
    <a href="https://www.loom.com/share/098d887e3ad94b30a1e8309e0efaf653">
      <p>Cocktail Party - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/098d887e3ad94b30a1e8309e0efaf653">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/098d887e3ad94b30a1e8309e0efaf653-050f10e48776a6fe-full-play.gif">
    </a>
  </div>

GIF created with [Loom](https://www.loom.com)

## Notes

One of the most challenging parts was implementing the ban list logic. Ensuring that banned attributes are compared dynamically using string keys and that the app skips over results containing banned attributes required careful handling. Another tricky part was managing the loading state while using a loop to keep fetching until a valid cocktail was found.
