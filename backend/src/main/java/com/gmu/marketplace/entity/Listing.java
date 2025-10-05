package com.gmu.marketplace.entity;

import jakarta.validation.constraints.*;
import jakarta.persistence.*;
import jakarta.persistence.Entity;

@Entity
@Table(name="listings")
public class Listing {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    // @NotBlank(message = "Listing name cannot be empty.")
    // @Size(min = 2, max = 50, message = "Listing name must be between 2 and 50 characters,")
    private String name;
    // @NotNull(message = "Price cannot be null.")
    // @Min(value = 0)
    private double price;
    // @NotBlank(message = "Listing must have a description.")
    // @Size(min = 0, max = 100, message = "Description must have between 0 and 100 characters.")
    private String description;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // IMPLEMENT USER ENTITY HERE

    public Listing(){}

    public Listing(String name, double price, String description){
        this.name = name;
        this.price = price;
        this.description = description;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public User getUser() {
        return user;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
