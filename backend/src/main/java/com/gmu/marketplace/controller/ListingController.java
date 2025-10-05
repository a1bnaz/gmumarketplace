package com.gmu.marketplace.controller;

import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import com.gmu.marketplace.entity.Listing;
import com.gmu.marketplace.service.ListingService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/api/listings")
public class ListingController {
    
    @Autowired
    private ListingService listingService;

    @GetMapping
    public List<Listing> getAllListings() {
        return listingService.getAllListings();
    }

    @GetMapping("/{id}")
    public Listing getListingById(@PathVariable Long id) {
        return listingService.getListingById(id);
    }

    @GetMapping("/user/{userId}")
    public List<Listing> getListingsByUser(@PathVariable Long userId){
        return listingService.getListingsByUserId(userId);
    }

    // create a new listing
    @PostMapping
    public ResponseEntity<Listing> createListing(@Valid @RequestBody Listing listing){
        Listing savedListing = listingService.createListing(listing);

        // returns the listing object as well as a status code (200 OK if everything went well)
        return ResponseEntity.ok(savedListing);
    }

    // update a current listing by their ID
    @PutMapping("/{id}")
    public ResponseEntity<Listing> updateListing(@PathVariable Long id, @Valid @RequestBody Listing updatedListing){
        Listing listing = listingService.updateListing(id, updatedListing);

        // returns the listing object as well as a status code (200 OK if everything went well)
        return ResponseEntity.ok(listing);
    }

    // delete a listing by ID
    @DeleteMapping("/{id}")
    public String deleteListing(@PathVariable Long id){
        listingService.deleteListing(id);

        return "Listing with ID " + id + " deleted successfully.";
    }
}
