package com.gmu.marketplace.service;

import com.gmu.marketplace.repository.ListingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.gmu.marketplace.entity.Listing;

import java.util.List;
import java.util.Optional;

@Service
public class ListingService {
    
    @Autowired
    private ListingRepository listingRepository;

    public List<Listing> getAllListings() {
        return listingRepository.findAll();
    }

    public Listing getListingById(Long id) {
        return listingRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not find a listing with id: " + id));
    }

    public Listing createListing(Listing listing){
        return listingRepository.save(listing);
    }

    public Listing updateListing(Long id, Listing updatedListing){
        // 1. find the listing by ID
        Optional<Listing> existingListingOption = listingRepository.findById(id);

        if(existingListingOption.isPresent()){
            // 2. if it's present, then get the existing listing
            Listing existingListing = existingListingOption.get();

            // 3. update the fields
            existingListing.setName(updatedListing.getName());
            existingListing.setPrice(updatedListing.getPrice());
            existingListing.setDescription(updatedListing.getDescription());

            // 4. save the updated listing
            return listingRepository.save(existingListing);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not find a listing with id: " + id);
        }
    }

    public void deleteListing(Long id){
        listingRepository.deleteById(id);
    }

    public List<Listing> getListingsByUserId(Long userId){
        return listingRepository.findByUser_Id(userId);
    }
}