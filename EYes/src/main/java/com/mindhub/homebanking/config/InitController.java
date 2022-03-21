package com.mindhub.homebanking.config;


import com.mindhub.homebanking.dtos.ClientDTO;
import com.mindhub.homebanking.models.Account;
import com.mindhub.homebanking.models.Client;
import com.mindhub.homebanking.repositories.AccountRepository;
import com.mindhub.homebanking.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class InitController {


    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private AccountRepository accountRepository;

    @GetMapping({"/index.html", "/"})
    public String index(Model model){
        System.out.println("asasd");
        return "index.html";
    }
/*
    @GetMapping({  "/account/{id}"})//"/account", "http://localhost:8080/account.html?id=", "account.html?id", "/account.html?id=", "/account.html?id=",
    public String account(Account account,Model model)  {//@PathVariable Long id,
        Client client = clientRepository.findById(account.getId()).get();
        model.addAttribute("account", account);
        System.out.println("id: "+account.getId());

        return "account";
    }
*/

    /*
    @GetMapping({ "/account/{id}","/account.html","/account" })
    public String account(@PathVariable Long id, Model model){

      //model.addAttribute("account", accountRepository.findById(id));
      System.out.println("cuenta");
        return "account";
    }
*/
    //funciona pero no recibe el mensaje
    @GetMapping({ "/account.html","/account" })
    public String account( Model model){

        //model.addAttribute("account", accountRepository.findById(id));
        System.out.println("cuenta");
        return "account";
    }

    @GetMapping({"/login.html"})
    public String login(Model model){
        return "login.html";
    }

    @GetMapping({"/accounts.html"})
    public String accounts(Model model){
        return "accounts";
    }

    @GetMapping({"/cards.html"})
    public String cards(Model model){
        return "cards";
    }


    @GetMapping({"/transfers.html"})
    public String transfer(Model model){
        return "transfers";
    }


    @GetMapping({"/create-cards.html"})
    public String createCards(Model model){
        return "create-cards";
    }


    @GetMapping({"/loan-application.html"})
    public String loanApplication(Model model){
        return "loan-application";
    }

    @GetMapping({"/invest-application.html"})
    public String investApplication(Model model){
        return "invest-application";
    }

    /*
    @GetMapping({"/error"})
    public String error(Model model){
        System.out.println("no existe la ruta");
        return "index";
    }
*/
}


