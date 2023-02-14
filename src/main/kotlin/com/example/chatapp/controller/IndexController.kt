package com.example.chatapp.controller

import com.example.chatapp.entity.User
import com.example.chatapp.service.UserService
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ModelAttribute
import org.springframework.web.bind.annotation.PostMapping

@Controller
class IndexController constructor(
    private val userService: UserService
) {

    @GetMapping("/")
    fun homePage(model: Model): String {
        model.addAttribute("user", User())
        return "index"
    }

    @PostMapping("/")
    fun createUser(@ModelAttribute user: User, model: Model): String {
        userService.createUser(user)
        model.addAttribute("user", user)
        return "chatRoom"
    }
}