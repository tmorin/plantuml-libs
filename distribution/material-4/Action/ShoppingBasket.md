# ShoppingBasket


```text
material-4/Action/ShoppingBasket
```

```text
include('material-4/Action/ShoppingBasket')
```



| Illustration | ShoppingBasket |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ShoppingBasket.png) | ![illustration for ShoppingBasket](../../material-4/Action/ShoppingBasket.Local.png) |




## ShoppingBasket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ShoppingBasket
include('material-4/Action/ShoppingBasket')

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
include('material-4/bootstrap')

' loads the Item which embeds the element ShoppingBasket
include('material-4/Action/ShoppingBasket')

' renders the element
ShoppingBasket('ShoppingBasket', 'Shopping Basket', 'an optional tech label')
@enduml
```

