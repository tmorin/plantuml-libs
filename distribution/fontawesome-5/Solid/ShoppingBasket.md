# ShoppingBasket


```text
fontawesome-5/Solid/ShoppingBasket
```

```text
include('fontawesome-5/Solid/ShoppingBasket')
```



| Illustration | ShoppingBasket |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ShoppingBasket.png) | ![illustration for ShoppingBasket](../../fontawesome-5/Solid/ShoppingBasket.Local.png) |




## ShoppingBasket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ShoppingBasket
include('fontawesome-5/Solid/ShoppingBasket')

' renders the element
ShoppingBasket('ShoppingBasket', 'Shopping Basket', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ShoppingBasket
include('fontawesome-5/Solid/ShoppingBasket')

' renders the element
ShoppingBasket('ShoppingBasket', 'Shopping Basket', 'an optional tech label')
@enduml
```

