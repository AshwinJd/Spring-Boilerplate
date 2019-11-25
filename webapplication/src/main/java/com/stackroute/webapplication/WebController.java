package com.stackroute.webapplication;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class WebController {

  @GetMapping("/")
  String getAppIndex() {
    System.out.println("HELLo Im here");
    return "index.html";
  }
}
