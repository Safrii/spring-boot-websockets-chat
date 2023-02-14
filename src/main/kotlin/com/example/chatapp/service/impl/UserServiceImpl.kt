package com.example.chatapp.service.impl

import com.example.chatapp.entity.User
import com.example.chatapp.repository.UserRepository
import com.example.chatapp.service.UserService
import org.springframework.stereotype.Service

@Service
class UserServiceImpl constructor(
    private val userRepository: UserRepository,
) : UserService {


    override fun createUser(user: User): User {
        return userRepository.save(user)
    }
}