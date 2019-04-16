# C4 Model

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
person_ext(person_ext1, An external person)
person_ext(person_ext2, An external person, An optional description.)
@enduml
```

![person and external person](http://plantuml.com/plantuml/png/ROt12i8m44JlVaMyLR09BPwy-IMIfeiDR3PXiw5-lgb5IgMdUSlCx9mzEImZ54OrYQHyDuRjh5zUfZAK3EmY2P1e5uEH4DcJIMX9Ii0M_P1Di5c0ZRk5E09MRIsYJjK_9U0SgLcbkwg7Ml6oT_hDgKGg9l6HBAeHicE_7FfNUS9RcWsxRw42y5BOl__BzaVPey6qBdu0)

The `system` and `external system`:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml
system(person1, A system)
system(person2, A system, An optional descrition.)
system_ext(system_ext1, An external system)
system_ext(system_ext2, An external system, An optional description.)
@enduml
```

![system and system person](http://plantuml.com/plantuml/png/ROr12y8m38Nl_efwc-1QDZnvyvT8rmLNIDEIfgZ_tiuXOx9JNlAzbtVqvB2CK1ZL99BorHYsJ_tmCfMXP60NIO14knYCXCYUJ49BKWAsw8TiWiq2RDmbn16mpjOYwbJv8Ryh2aq2pf6wixgfvNBQadubLP6AINmaYsg4xDZFY_v5xl2IPfNTDr05y1pOll_pzdlUlSAqD7u0)

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
LAYOUT_WITH_LEGEND

person(customer, Personal Banking Customer, "A customer of the bank, with personal bank accounts.")
system(ebanking, Internet Banking System, "Allows customers to view information about their bank accounts, and make payments.")

system_ext(email, E-mail System, "The internal Microsoft Exchange e-mail system.")
system_ext(mainframe, Mainframe Banking System, "Stores all of the core banking information about customers accounts, transactions etc.")

customer --> ebanking: fmt_name("Views accounts balances, and make payments using")
ebanking --> mainframe: fmt_name("Gets accounts information from and makes payment using")
ebanking -> email: fmt_name("Sends e-mail using")
email -u-> customer: fmt_name("Sends e-mail to")

@enduml
```

![System context diagram](http://plantuml.com/plantuml/png/TPDDRzim38Rl_XLSJXbWnvUUUXZGTK5ReDq69DkmKo3BT2nK4Ws9Mff_Fzg9xGnBJxBvyP3lAviDMymsnyZeu9uyunj3RTG-A0SD1NYIKF38y5dvL-FtSAhDqDSyz7umNjjKOmeMMkOktfPbK8VLtd2RgXGnw1xhUQN9bUme65zsLdbEpXRMLB5qIf2Xr3UEQhHo5ihQLIVvB6jDZT2daVZOOVPyz_lRZ-tkrzFsSVUyVbX__P9b7OP8VgbJP78OSlW-19ITbhwVKeix6Ek06k0MePAY70woBtHZOny3fJKbpt6r-9Z5GVOIgnCnVy-OVeArT8ZJc0XCyCVW0OmNHvrYGnvKHOdxyIRyEom7vMjmwXMXKqU7v_dd1NPoFqjqojWSraL_pdEteiKCMuc05wC3HMeOrc-wLNwFWAVw4sZMD20bunkvSypXPNpyNzc6AM04kPtHEoq1E7joHT_imIoFW_9HwRug0h8Ur4rtKXIVO3Jv5Xh7Eo-hB1S_nS2P8YFb2z9upIr8KNe5Ec86vYJm4lg0VC6yNBy9v2Pq7DbNqB9jx-ebTIF_HXpTdZg6jo99mwZrtHucQVWB)

## Container diagram

```plantuml
@startuml
title
Container diagram for Internet Banking System
endtitle
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml

hide stereotype
LAYOUT_WITH_LEGEND

person(customer, Personal Banking Customer, "A customer of the bank, with personal bank accounts.")
system_ext(email, E-mail System, "The internal Microsoft Exchange e-mail system.")
system_ext(mainframe, Mainframe Banking System, "Stores all of the core banking information about customers accounts, transactions etc.")

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

![Container diagram](http://plantuml.com/plantuml/png/fLLDJnin4BtlhvXoIgGDkVJ4eL8QK04HYDWKw0dDUYU9XJzMjZSXglhVEtPsGmAY7oA7EBRdpRnvVdQ238goiJK1fI47bSI5Gmrpw-3217A60dn5yoJD0egD3wGpCbL8i4_I2DLKr3W5on1gVp8SEbmVBsHODcNZoGbEJ2OS2wk7GLidpR1MQ4AZrK39qWyrSaet59-rhKZnE42bZclUpxAbh0ZYDjcmgIcx6lsu-JvxlB-OdJzUdNqxkpxDifgSjwOd6X-i9fV3D2sWsf4UxxQEHj35WPr3M1AK79J3clb2tG7Z6g0GjZ717n_rCv_QVgJdq2EDKkLmDeXZgmSddd4gcTHY_4GAPxsT1pXx5aiq2mBQncyJlKh9EsREabCEa-xdAyMvGX6i8myiJaTTy4BY6kCOPvt68Aq1B6qJTftwNIiv18V6euXH7YY8oAIZmY1JeTlqgCsPltV-VVYP0Nz4PvhUcieSxgc4KLqhAHAD72vnXO2cWg9s4Jsv6tCZfwJaAjAAFVZ0iG9QbwJWkBmhtBNd-KiHrCXQuakDoF-GYQynXs8RFOtHRnWLmibwMsfa5et2Q8ofioissu6-RqZC6vEaGoN31eBTatWbCMAa0vO2IcVNxFstxBGjfOhddCR8BOS7rCZo79009RKCL85lIiyCFiHeMnGgMab17QSA0vRegLVnoPssannkIU4suMuH2h5arxzOC5vhSBIGdksK3BTdlXoMw9VC71kkRa8hFGX7LPoYOXko8SbxK7R1azQ6Xq9XBNCOJI_-nL0xsVwiJr84uRAukHwUpsRJ8kQFbNzbsUvL60o-n1CyWRaEZuOlOkzEUXclJeBq3oFPR7kHHtUIrY-tZKdmGyUDvecongVetusckDT4Gn-zIhSzg0zcp9XKoiOIxgMQSB1FYWgsE5y-c-z9qSzQa_m_aADXe1XMxQjsIrXvc3kh4zMrOpUtsDElunRLC2gzftl0WlzRVFTSffxuEazcqnR28dLFv5yuFaokEegfnhPSf_Sx5IEqd_q6)

## Component diagram

```plantuml
@startuml
title
Component diagram for Internet Banking System - API Application
endtitle
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/c4model/c4-all.puml

hide stereotype
LAYOUT_WITH_LEGEND

system_ext(email, E-mail System, "The internal Microsoft Exchange e-mail system.")
system_ext(mainframe, Mainframe Banking System, "Stores all of the core banking information about customers accounts, transactions etc.")

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

![Component diagram](http://plantuml.com/plantuml/png/fLLBRziu4BxhLypcP0EoVTbJ3WiuZsrJnAqHEMttP8oeiKs48WMIYciK_UyxrCkIuqLRhoyKoNbydE-RiPTUKNHhyi9eqXuoYLkBEMoCXGVjoMhoS8FwHUej90VdAOS9p9SFC2yA9GLwQNH4ElDLe3-a5ghCgBGATjuNxdesixYVRgNVbMdfo0h3KRMV2fFFV6wirBD2eVPbhYPAfcwM8oUnC_5dRZ9Il4vGgMd1zr6qanb1k2RZ3mL5Z_D_FZslrbyULk_NZ_VlxZ_UHP6hGAxfcnzHZbB5S3y9QuC-XglLZa1MRqC52ociSMRZuVwRsA7U4b1jNmUQNetx8Vb6RxX05CEY_Jof3sT8lB7aW863sO3dV88F86tisC_Ol2eTO6fA3w9qtkHasKS8KshlOl0MjKCHh1oG5m595Ch7UScEN84n91nE4IoHOVS8YU43lc8Yh2myeCvWhhUbGilGbjQySXK7u3gYMu2RKbTvKKb_06zw-5ub1XzfOKyffDRicTG0xOWiDwbKeK3L6d35y1LpPAu70439N7hAm9Mfu-p_2qsT539wbO82dWmzfkXebAKnt3MR69v8OHsiEuH4x5WgHzw2Ji7ILZhce6AfnrWCEtGxHeqbPzQ-AJa8IrdOecBkc4Lo3fJPykODTslcN6Te3oCiP7pQJMFu7W7_HDkKmMhjv5Q7-YMySedWbeDPenGngKbXGvqMds_vUSuFxkPACKNLaroeNOZ3pmcVWs8FDJmTdu5Ge7DxOxDGnC3NijbVZCLMOMh-sk0EzZmhM1okblRpq-DPCAxCML473bet32JrmI-3wNHuL5ERkObKwv6n1I5sZNaU3OdIiZevPVC5tKpjODmG3XfWg6iRXCcoQZYgvqGCrKmAcwv0dQ3UmXWElFz4aF2yTisOguYe63aVacr-Ck_WRnIOqMcIEMogS-2QrrhhPcVNsSSH-uC7Tu4mcVm5HxLVmoRtQyqUemM-SCL2fmWUN04qpxZaqyVP-zLgcOm7pcsbBdHlwFyDxwWPFXUZF_6_u06d27x_3KVWnoYDbdjXdXsvSTG7UQ5r9TMpfctxjPQj0jyOH_tRohnJs8aj__yi7jkNTjahbrCS_TxWlc2LDgZQlWvEMThpU29aZuqrUVLNksShQkfxTtCxZlu5)