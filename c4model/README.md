# C4 Model

This library is deprecated! Please use [C4 Model V2](../c4model-v2/README.md).

Library implementing elements respecting the [C4 Model](https://c4model.com).

## Install

To include every thing:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
@enduml
```

To override constants (font size, colors):
```plantuml
@startuml
' load the macros and constants
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-macros.puml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-constants.puml
' user override of the constants
!define TITLE_FONT_SIZE 14
!define TECH_FONT_SIZE 10
!define DESC_FONT_SIZE 12
!define CONTAINER_COLOR_BG Orange
!define CONTAINER_COLOR_BORDER DarkOrange
' load the styles
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-styles.puml
container(container, The container name, Java, The description of the system.)
@enduml
```

![override of constants](http://plantuml.com/plantuml/png/jP6xJiCm58Ptdk8m1QGs1jI93H83GLKZfPbO8jS-RInyYModg6-FYo7jmjZ9b-y_vp-N39Hb0aAFe1btrWCp0hWrFZ0J_DMrD5oD0aUde0zXy8-4EFQLxsJenyteqKLjG1DoRZK9sZffoA1YxAZLNCcD9vhvW8xmXRO2LJpdoIaVekGo1bFzoIE3OnwmUtHE2WIx_Mduh4k1MsaGsgfTqkwbNhNTklgWSByu8LgydPExYPHqNPoJXuaKyVEfMj6cA-fbtNJFhr0xPdRulw9kIjf0oTpdhp8xBSY7Wy8BhIJbJkCwXhDOdRkPRZDeqy3I4mpJE8DtjcU92FJSoI58Q_wcwm_HG-Uttm00)

## Elements

The `person` and `external person`:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
person(person1, A person)
person(person2, A person, An optional descrition.)
external_person(external_person1, An external person)
external_person(external_person2, An external person, An optional description.)
@enduml
```

![person and external person](http://www.plantuml.com/plantuml/png/XOx1YiCm34Jl-GhlRGCRcuGzxIdx9SMnHMEGPIFBj9_Vf4afBO6Uf9dX3JCMiImrOlCLo67rK1dLB9BBdp5iB_eSPAvJBS0kaG29TYaQYOa3cOoMLhh3C1KJRH5WutvZye3BxIoYpcjx1Yw9lhVJ_wX_jRtjQp8ya-KZbRA4H1QLX-8uh4At3Lm5U75FE_kc-plwCFUwZzHmH1sDoFkA4SZNY3S0)

The `system` and `external system`:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
system(person1, A system)
system(person2, A system, An optional descrition.)
external_system(external_system1, An external system)
external_system(external_system2, An external system, An optional description.)
@enduml
```

![system and system person](http://www.plantuml.com/plantuml/png/XOx1IiOm48JlVOfuis0JMZnvgayYQRBOm6OJTZUeRs-g5L4A_sbtPlY6MKKzQyiut2KAs28qHhEhLdboZlsRVKswjwq9S2YaG6f3oKvpuKIkegU3dZ1juh8N1NRXCPS8sE_a4MqzskMZH_c-0akX-S4ycszd_9iilqd_o9IggP174q42fqFOSO1t1Uxkoyd-q_CN-cEUTJUfvOgw6b7F5IjGR1a_0G00)

The `container` and `database`:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
container(container1, A container)
container_t(container2, A container, Java)
container_d(container3, A container, An optional description.)
container(container4, A container, Java, An optional description.)

database(database1, A database)
database_t(database2, A database, MariaDB)
database_d(database3, A database, An optional description.)
database(database4, A database, Java, An optional description.)
@enduml
```

![container and database](http://plantuml.com/plantuml/png/XO_D2i8m48JlVOfuQw5jK7loLl4a-0ooJO8DR9AIRFJrhKB__3rbXlqsExFILc2KAdfaBL4NTfnxk9KNJMriOb1UE4lAKYcSuMISrvPt29QYmG9r4xY1GCfpKHad5VPl0OXbry-JnovegtmwgdNEQZQwR4BED46R1PIp8rnXZie9tRwWjMMk8-qi89Cg2A-Vhim-XQa-tFdrHIA1e86Wqa4ywmmc6-TzcK5kvaJEJk0r7FOpL8xeTeb-p_4Merfk_kbn1m00)

The `component`:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
component(component1, A component)
component_t(component2, A component, Controller)
component_d(component3, A component, An optional description.)
component(component4, A component, Controller, An optional description.)
@enduml
```

![component](http://plantuml.com/plantuml/png/VOwn3i8m34HtlY9iL6eR0PtOAZu4fKb48pbsv3ZYzuaOseA0oJxvdk_s0IqKvmk3caLIlcZDvj7VWynbAjcp9HIFqbkAMY9nG9t0e9G87OGfwsYoUDPsYEGyrDaPW3xL-wuoYR3IXsKxjcfKYsfMosrZEhsPMdMj7PW0F6y1jmBd3s14HKa2eG7bVBOSNgfllbKQVgRzUVG4)

The `boundaries`:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
enterprise(enterprise1, An enterprise) {
    system_boundary(system1, A system) {
        container_boundary(container1, A container) {
            component(component1, A component)
        }
    }
}
@enduml
```

![boundaries](http://plantuml.com/plantuml/png/JOx13eCW38RlFWMxQJ8bItRQRK-o83QJf1HIIXQp-Ex3wNGzqFzl_myuERAO1yYCQXI9wQOrcrVtT3BcFYTW6qY0fBF1Q_617Uc8XYHxRD7rINkJ15ZRgmy3OEcjGUnYsLU50uxi4jI7l9pLdTJX6_MkLAaqbNlyem-P1iDJlVeblQr-mQMMNnb7m4T-7tsHtVrJA-bZeF9ylQiDs5opn-TgFUSF)

The `relations`:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
person(person1, A person)
system(system1, System1)
system(system2, System2)
system(system3, System3)
system(system4, System4)
system(system6, System6)
system(system5, System5)
person1 -l-> system1
person1 -u-> system3: fmt_name(uses, HTTPS)
person1 -u-> system2: fmt_name(uses)
person1 -r-> system4: fmt_tech(HTTPS)
person1 -d-> system6: fmt_desc(uses, HTTPS)
person1 -d-> system5: fmt_desc(uses)
@enduml
```

![boundaries](http://plantuml.com/plantuml/png/TP0zYyCm38Rt_WhVba0JqtmD6GvkwrXezyDrr4j0jeCjK_hlp-0wFSnrUeMUHxBmnw8b-WcyHJOJhMxat8fx_RFGxA_UWPL64sYgfL6SbB6BvYiAJLvXXSlLSIKSWUMoKsO235a9n7eDVBU2TKONCGvxziLYMUxS8mof8aOWvrXae4cWoK2RG9k1Be4k0qC2GmRw1FhoUU-1LLXzikTjhwRVckt8Reg-jL1GX3zoUtQyN4xdyZ-toTm_ajsaBae4SYxoLTDc3T6QmCatpxxSFdFBNm00)

## System Context diagram

```plantuml
@startuml
title
System Context diagram for Internet Banking System
endtitle
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml

hide stereotype
legend()

person(customer, Personal Banking Customer, "A customer of the bank, with personal bank accounts.")
system(ebanking, Internet Banking System, "Allows customers to view information about their bank accounts, and make payments.")

external_system(email, E-mail System, "The internal Microsoft Exchange e-mail system.")
external_system(mainframe, Mainframe Banking System, "Stores all of the core banking information about customers accounts, transactions etc.")

customer --> ebanking: fmt_name("Views accounts balances, and make payments using")
ebanking --> mainframe: fmt_name("Gets accounts information from and makes payment using")
ebanking -> email: fmt_name("Sends e-mail using")
email -u-> customer: fmt_name("Sends e-mail to")

@enduml
```

![System context diagram](http://www.plantuml.com/plantuml/png/TP2zRjim4CTtFSNLamD8rj8fGv4s28eE0Gguw1gSgPD4XEG9vB6stxwa5CeEuaooZtU__yT34FGIhQb4Yw5gVmv25XxP2Pq4Ees3HmizU_YLHjwHm0zqhzeDiEnMvBhbzejsoiIEeZSmYapXlcqz7dU3bZ4UOY2lCjR9Jh5jnRBNhfqCkgpV67q8hSM4zAtwQhaZaxuD6hERihzgr1r1VYQMyqILeI59R--gQY8Vs6rL3CAMV0s_vm6QrUhZ-hJv3cKFk0SP2GvfgOPZSWbJESmpGAKuEWcxpLqLvh1REYp4-hCwie8nV0ohJ01X-AVf2Dgb7YsAPWTuu2XPNlltOZMWwy3YAy64Pqjl-XMTiXwQb-B4eZOrF3NvUn7_CrBIMLRXMIlFWNk1fvCQqGq4jEmla0J-mBMOR7gqLCDp-VanurxOKm0qfhIeqW3UshcHzDB69QXuT05LtWf0ekQSPH6QvXkKkk-Xj_BYqD9sypTLUQ4aIODEqQtU88Pqcw05CpFNWDVGdoHNp6lxlMUxeaDXtq0djxdQQ-gUN1TAvUl5_A-9wQ1a_VH6E5Voa4RHcly0)

## Container diagram

```plantuml
@startuml
title
Container diagram for Internet Banking System
endtitle
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml

hide stereotype
legend()

person(customer, Personal Banking Customer, "A customer of the bank, with personal bank accounts.")
external_system(email, E-mail System, "The internal Microsoft Exchange e-mail system.")
external_system(mainframe, Mainframe Banking System, "Stores all of the core banking information about customers accounts, transactions etc.")

system_boundary(ebanking, Internet Banking System) {
    container(web, Web Application, Java and Spring MVC, "Delivers the static content and the Internet banking single page application.")
    container(spa, Single Page Application, JavaScript and Angular, "Provides all of the Internet banking functionality to customers via their web browser.")
    container(mobile, Mobile App, Xamarin, "Provides a limited subset of the Internet banking functionality to customers via their mobile device.")
    database(db, Database, Relational Database Schema, "Stores user registration information, hashed authentication credentials, access logs, etc.")
    container(api, API Application, Java and Spring MVC, "Provides  Internet banking functionalit via a JSON/HTTPS API.")
}

customer --> web: fmt_name(Visits, HTTPS)
customer --> spa: fmt_name("Views accounts balances, and make payments using")
customer --> mobile: fmt_name("Views accounts balances, and make payments using")

spa --> api: fmt_name(Makes API calls to, JSON/HTTPS)
mobile --> api: fmt_name(Makes API calls to, JSON/HTTPS)
api -l-> db: fmt_name(Reads from and writes to, JDBC)
api -u-> email: fmt_name(Sends e-mail using, SMTP)
api -> mainframe: fmt_name(Makes API calls to, XML/HTTPS)
email -u-> customer: fmt_name(Sends e-mails to)

@enduml
```

![Container diagram](http://www.plantuml.com/plantuml/png/fLHDRzj64BtpLqnzae2LTUafXoAE7Q09gbO83JStOxWSIOli1x4pb28K_U_TNNvOWfksQ2wcEVlUl3TlHtpBWb5wPoinOgcw3rxGU8hG6jn7TB0B4JvueUX9u1twByRleJwpaAl8jmFj1-ErxLlgeuM3ICTlrkk8fzkzaKFVz4nHfyRavLO7jnONel7hpgBFqYjh6buxv2IorZ-wq99DpnLQUzjbQzN1j0Jvc8ASEweixPFqObbL7KKEVg5xbk0eAjYM0jhPwlryT7C74mx23kH0q2IGWbDo2Tr4p3L0hKFlXMzlbXLzpTEZVUOozO8S6glW_Ie_noXIzyVKp_W12XkZO-2m4tZ_LH_Gxmbem0zD_gvlElQxY8uKRAP_vp5ccLf290QqTXf2fm8q8oxnGdGe9dZ09lGopyppK0eaecVK6SL0ehETQh3nd4Y-nNXUqDXJVUl-b_171G2WfwLPdAXHy3irSDTrrkXYGy57F2AWRw7kOcPldkxJ80zapJ7PAZEm9Ao6SKiAE9LduNayJdyiGOTx0dpHoFwldN272ke1lKteruvg7KqtIDtvVMynhyWsXgDfh_DzPMBN-n8TMYDda70HyT5WvfW8AGfeOZWnnTVkN6YCpVUSdyMRWi_eC1f_PGAiSKQe1UuR9la-HuCej7GqcYPFBGesoBHe6mKFuuk2JsHnQ3WNeTO7SlYoWZrJX4Xxmn8B-7Bv51oG3yavzadTonWzw4XjVaNBAYyaCOCD-_H2eby7XPrHSBVzy5yMQexjd_CfYI1yh7_xTVtpu-EsplspyfzLDSK6gzLF-GRVmCx9iqT7YoV3HfBDGbbU8xd32-JDaw7JowyjcR3eDR4gbXr-oVjxTfJF-hpGDzVjnelwpevLCbMwfGWlMcqIc4kY6grbaA0kebXMW_R_82Oqh6oYjPUfVI9i6NOnk6Br58tGo7ruTp-o-iGg7zKBOas-vUcRMMPIK6yUjmCb4UQlvRzu_BpvPR9OD0QvAUzlA6PgYl1jAlNE_WK0)

## Component diagram

```plantuml
@startuml
title
Component diagram for Internet Banking System - API Application
endtitle
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml

hide stereotype
legend()

external_system(email, E-mail System, "The internal Microsoft Exchange e-mail system.")
external_system(mainframe, Mainframe Banking System, "Stores all of the core banking information about customers accounts, transactions etc.")

container(spa, Single Page Application, JavaScript and Angular, "Provides all of the Internet banking functionality to customers via their web browser.")
container(mobile, Mobile App, Xamarin, "Provides a limited subset of the Internet banking functionality to customers via their mobile device.")
database(db, Database, Relational Database Schema, "Stores user registration information, hashed authentication credentials, access logs, etc.")

container_boundary(api, API Application) {
    component(api_signin, Sign In Controller, Spring MVC Rest Controller, Allows users to sign in to the Internet Banking System.)
    component(api_password, Reset Password Controller, Spring MVC Rest Controller, Allows users to reset their passwords with a single URL.)
    component(api_summary, Account Summary Controller, Spring MVC Rest Controller, Provides customers with a summary of their bank accounts.)
    component(api_security, Security Component, Spring Bean, "Provides functionality related to signing in, changing passwords, etc.")
    component(api_email, E-mail Component, Spring Bean, "Sends e-mails to users.")
    component(api_maiframe, Mainframe Banking System Facade, Spring Bean, "A facade onto the mainframe banking system.")
}

spa --> api_signin: fmt_name(Makes API calls to, JSON/HTTPS)
spa --> api_password: fmt_name(Makes API calls to, JSON/HTTPS)
spa --> api_summary: fmt_name(Makes API calls to, JSON/HTTPS)

mobile --> api_signin: fmt_name(Makes API calls to, JSON/HTTPS)
mobile --> api_password: fmt_name(Makes API calls to, JSON/HTTPS)
mobile --> api_summary: fmt_name(Makes API calls to, JSON/HTTPS)

api_signin --> api_security: fmt_name(Uses)
api_password --> api_security: fmt_name(Uses)
api_password --> api_email: fmt_name(Uses)
api_summary --> api_maiframe: fmt_name(Uses)

api_maiframe --> mainframe: fmt_name(Uses, XML/HTTPS)
api_email --> email: fmt_name(Sends e-mail using)
api_security --> db: fmt_name(Reads from and writes to, JDBC)

@enduml
```

![Component diagram](http://www.plantuml.com/plantuml/png/fPJDZjis4CVlUeffJZOWsvUUSYZYtQHeYhWrLfiYjyM874j4-25mg7KMHT-zf2HpjLu7RTsJ96hcFp_EnxpZW3xqHXT11Kt5hJETisG3I8MDHmC7v-6Z3UGj1RX1-rNP1ged3cHW1TlzHzXsdLO2WtAs82j7eH-K5RgNr7iDRGWTlzriF1xNZGfjN_TCNhYeQiDQEBC9ndbbDvr6cs1MMjMyCSY1_4RyQ9ma7Pyhr7hT9TYYLP8W_IONdZegD3Knz69P5FGjiQ9-u85nGGQLBk73AZqdy1BUtBS4oewci5F2EtQ701--YHPjGq2Z_IYoVhDyfHj_suD7GoNiJgyvFpbC5PmdXWWExW0X1XNn0Eh9BlevRuRK0TQk3o1w3iwGPq0XN6y3bn0yMaQHh1WeY8HJfFJ5kEGNt649LPJJ17jiQ5wG4dx5Hwo4Lrq0j1Asjkar-eYsz-vHoHTmkT0PyD3R8Ivg5PuWk1dVeyBaepmSgORQkoEJZsWpCkDgfLE2XcVYAk4B6lJAlW00hOmA987xcYdyFvenA4XwL88IZyI0DJ8jP5t2--cZX3lIE8hbGwX4ImQVwvRw53mrYeCVZESLAw55RYCrzZ6o3LFAGNYIwHCrbwcAn0pQDLo-hjr3hBcLw9yMsAdoV9gMy6S1021EGvci7bWrDkMlYi-O8hYDOjvfJJwUTJxbQVV7RRmUXnV_jbgxutWbJhbBEg1iUetutvlnzV82GeVCH-TbIcAgrtxwlfh59vcfVYTnXgCABI3msDgVxpvTXE7Uc9Z1A3eE35JZmR-6oNsOkob7dfJSOM9BZPW7yp8DYTwh476gwGtoJiqODuJp0JZhQvyQa-IfHiaXrNjOJEaZ9oWtr6kCbrllkmGLMSdJhak562joMJBQ_CE-WvzHeAJp85iu3EVWxDHh9WjCaptRityL1NS8gzLFyDpjR-5WmeED7eiTVYKU9aMW7g3ZZgj-_stpo_tzlbhEdNEVNka-bVy_U1VJyhcQFljVVO6iSFKTdi6pojJLSvdFJBmivf1NMETMlM2QsRFbgGDV6HVplyayTzYvRGbVTfzEDytH1vTpZlbiG9-MKFB8jnknP3tpk2EC7WVl3A2LS8nMDENt_Srjn7mN9NkZ_mO0)

