package com.example.chatapp.controller

import com.example.chatapp.message.Content
import com.example.chatapp.message.Message
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.stereotype.Controller

@Controller
class ContentController {

    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    fun content(message: Message): Content {
        Thread.sleep(1000)
        val content = Content()
        content.content = message.message
        return content
    }
}