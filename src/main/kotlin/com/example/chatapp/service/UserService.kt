package com.example.chatapp.service

import com.example.chatapp.entity.User

interface UserService {

    fun createUser(user: User): User
}