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
person1 -u-> system3: format_name(uses, HTTPS)
person1 -u-> system2: format_name(uses)
person1 -r-> system4: format_tech(HTTPS)
person1 -d-> system6: format_desc(uses, HTTPS)
person1 -d-> system5: format_desc(uses)
@enduml
```

![boundaries](http://plantuml.com/plantuml/png/TP0zYyCm38Rt_WhVba0JqtmD7GvkwrXezyDrr4j0jeCjSzo_FqDgjxZjz0ezZsJXZrbBz2DuYsmYMjoUSoj-wv-P9d_n3gmqca1JBOtYf8oTDLzGQF8AAvmlZYlX22oNdJ8ZOCXA8DPBu9i5h3EwM6EtPLziBSkD-mj3gbWZaDDQPA29eCb06q6RWIw2BWD314C6-WZwydRlZbLOVRBRRVUcJyrspwx6Aa7VMYWemZUvBJkSpyTJ-KfldlK7poQlInw1d8fyuPZ48OaZEFdc_RlUF-lbFm00)

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

customer --> ebanking: format_name("Views accounts balances, and make payments using")
ebanking --> mainframe: format_name("Gets accounts information from and makes payment using")
ebanking -> email: format_name("Sends e-mail using")
email -u-> customer: format_name("Sends e-mail to")

@enduml
```

![System context diagram](http://plantuml.com/plantuml/png/VPDDRzim38Rl_XLSJXbWnvUTUXZGjK5NeDq69DkmKo3BT2nK4Ws9Mff_Fzg9xQxBUfBDZuTyNzbis6AsEKP61pVa6PyPQgFsGJbeAC2zX897Xa_AFnc_XrDjXhxceVUTyTgc6bEmq39tyQeiWpgizeRRLAM8GVTOpojDhcH7mVYoiyfpShQmfegbKu8CfVxWg4OhPw6iNNMIpxBMr0Xz6ecF7MOFrx--Vj_kVjvlF-yUrdVhBxTPrc68v9SwHIQ78OTlGq3PQUcRARMuXh4Eg05k4Iefok4W-q8tDlOnK5fJyXnNY_TP76GliJeHy_yPqq-mbWvn6XE12NuRF83nugXJRCY3gYXnFzw4luVbe7mDJZqXTEhey3p_lC1ExcU9JXcRmxheptdkLhIOOIiHy6Xqe4WDm_fPjyhl4V1KVmBDcWQaP7mZTuuvF8wF_ohRC0MC8BSpUgSb06TFBkYRFPZbSL0-AjrNHK3MWxhfJehY8umcNy69j_EopNBnGpoSGJ9LFYADbmo35ALTk2Dfm4uQNt7la5zWNufe0hc97aVy1Rhit7lx2hoHdoIEjazDmrkHf6SK_LORa_Jy0G00)

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

customer --> web: format_name(Visits, HTTPS)
customer --> spa: format_name("Views accounts balances, and make payments using")
customer --> mobile: format_name("Views accounts balances, and make payments using")

spa --> api: format_name(Makes API calls to, JSON/HTTPS)
mobile --> api: format_name(Makes API calls to, JSON/HTTPS)
api -l-> db: format_name(Reads from and writes to, JDBC)
api -u-> email: format_name(Sends e-mail using, SMTP)
api -> mainframe: format_name(Makes API calls to, XML/HTTPS)
email -u-> customer: format_name(Sends e-mails to)

@enduml
```

![Container diagram](http://plantuml.com/plantuml/png/fLLDJnin4BtlhvXoIgGDkVJ4eL8QK04HYDWKw2cQzKuI2w-zihq9KTN_th7t0mAYhKeESMpFctdp_EnuwHKbKwCzIaqM2ebhYoMiZ8KBxSbgyl0LzQFKQyZspbEPa2vyX7sIMgYweDegs7XVkPFnsEBkU2tzfivhHrPmOjB-M9Xox4jZfHvN2hMlIpLICdVZ4Zcb7OlFfIb8yJX2fOuhta-IZIm8mZOPlwyekPhykFc-MDvVBCwNLsVVpgvFawGYwumUYDfvKv9DOHuNKFMaf_tMqGIwE30hy1k2d8DIs35Vg3fWM0CKmjJQk-EZOU9YsqjwyWCgKQeKpaPXRFNWn0jE9QDQZ9z9OOqpAmzdJsA3Uar0JNoJw5LAtj4hbfnIc7K_NodE5J9lB3bWSJhgWXSYrn37E6DBzD9emDpKlk_KzQsau2rgXo94EI0l0fEE2eDqWNO_e3Pd-jxv3-5d0lmHdMa6EyfJkASS9bMbf8WqKhZ4BGBg0hBA1lJiRigDd9AIsq0hzE0ynmfeNHA3mt9Vk6lFyPSYg92rnESQWVyX4rTX2baJFG_HRnXbmiggAJNHwrfXCCRScYsRxK3VDoHMjOxIeP9-3zwya7WhCM2a1PO2ScjsxFstx4gJInNEEOw1MmeFM2BBSq02b2obfm9SdJjcy256JL4eQ2i5TPmAz9YZeq719tVQJbAu9OLDmduHCh5XrpzRC5nhiBIMZkqK3VV2V2biq6sOETPSNVjMUX2MYZ15nJPaGv9peCoQ9wqD3uN2IgOmcL_yYw5wsVwiJrG4uJAxkHwVBnRpBEGFbNybIVygZ4PVmWcUGDFGKlDT7Dn99yFjYQZXOJ3xxJ3uw4xIxldECHL-xhZTD18lyJ6uU5zIsAk3hOzUPMoEw-D94wOM4xAMXzbc7E-YkeBjpXVHf2za6IQjOVuBom0OAKOMhqIy9ImShAmf8-UTPN-tyDElqnPOCp2-i8VOZFzmNFU6nlxuZiyMynR5cdNlvj_9FiokEgwnKbEqEu7twmRqCFaD)

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

spa --> api_signin: format_name(Makes API calls to, JSON/HTTPS)
spa --> api_password: format_name(Makes API calls to, JSON/HTTPS)
spa --> api_summary: format_name(Makes API calls to, JSON/HTTPS)

mobile --> api_signin: format_name(Makes API calls to, JSON/HTTPS)
mobile --> api_password: format_name(Makes API calls to, JSON/HTTPS)
mobile --> api_summary: format_name(Makes API calls to, JSON/HTTPS)

api_signin --> api_security: format_name(Uses)
api_password --> api_security: format_name(Uses)
api_password --> api_email: format_name(Uses)
api_summary --> api_maiframe: format_name(Uses)

api_maiframe --> mainframe: format_name(Uses, XML/HTTPS)
api_email --> email: format_name(Sends e-mail using)
api_security --> db: format_name(Reads from and writes to, JDBC)

@enduml
```

![Component diagram](http://plantuml.com/plantuml/png/fLLBZzis4BxhLqnpiW7PlkIKGm3leyqMwyHOUTlaP8oeiKs48WMIMiSe-jyxf1wsl0wIEhvGbERnpNpVZBtqYf9RKrP6a_PGIDnQB65ZB3neJrQJXnlKNwNUGdPmdagOm7pv0FEgKbAWbqOdf0iV0_qcjL1rGRLLiFE-SkzcCulxwLRwNPtNZgmm75NxgJ3bp9V6IZsh56fVbsgYPEvc9N8IEnDlIrEGudE2Iaqh_fuaEraGXCza_A6Yv77-vTFpQlttm-h3-l7-Z_kFTqdY8iWrVVCZAb6g5EuduMpHf_1cjIEGiJPKi9326cSs7kw_YHtgBG4rzasWwPlnQKZ-eZVS84fXqJsUzOSpPDvOSi30mMp0Spx1Bo1lxTZFs3As3Z0tjGTHEszAikmZXAcrTobuYzgX25OEo8k090djuxnaHwx2538EfmYMoB1F24dXJtp1J5XPUK1Tm5nlQuMMeIsjUU4k3i3rH7S0DxMEUL59Vm1lJl2zI0m-qiAUSiYjsJEf0TeHMMbogKA3uXbmfV0PIsIk1m10oL9wAi3LkUFiluIcIGe5lKX10K-17dDqD2ho5ExQImfFfB09rh-4JEnOAaVUWax1qbOwvY2oTC9O2ZjqEqQDDMVMlcqv24j5kA9YxfX5SWwKsVBb5NThvbmNQ0yZh6HwFarZ-2S1_ebkA8FLsicj3ltB-EGMmIq7iqOfObApoeO-BVwwvVAS7toRAyKKnP9Sw5s8m-M4nq6pXngUZYz0gD2vlR55Q6BWQzdUhyPYOvY6lowuWptl2XQ7QwJz_FHu4OohIrRKWOCs0mDPy-AdmVGwFAgfozn6QlJ8s88G-y6yZ8P4RLcTdB9zWdwdzZ1k20S3CDIr3S9aMRKSDNiYXRYJmgLlK2-erp262--x23BUrwvTSv68oCZba6ppWtq7lwF0WiwJp64JtmFtlD5QlplxoJwks7zvSLS8aybxEAhz7JHJjzRiD5hWLsvQ61R1kolWvZMNVVeu-x1QBRFnmBzhrlKHMX7ylm19kuL-fOop4DTLSexZgcAE5Hm3jUeUHdfsvCR9AThh7QA4lsVTJMPdt8dpadroQX0zUlszDkS_gCLZLtWF8tfT07GwFpmxhEGMNZVxmQ_8XqvFXEoqiQQC_yXxDgIswNStj-FaFm00)
