package com.gmu.marketplace.repository;

import com.gmu.marketplace.entity.Listing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ListingRepository extends JpaRepository<Listing, Long> {
    List<Listing> findByUser_Id(Long userId);
}