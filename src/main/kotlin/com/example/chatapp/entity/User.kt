package com.example.chatapp.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "chat_user")
class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null

    @Column(name = "username")
    var username: String? = null

    @Column(name = "created_at")
    var createdAt: LocalDateTime = LocalDateTime.now()
}