# ShoppingCart


```text
material-4/Action/ShoppingCart
```

```text
include('material-4/Action/ShoppingCart')
```



| Illustration | ShoppingCart |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ShoppingCart.png) | ![illustration for ShoppingCart](../../material-4/Action/ShoppingCart.Local.png) |




## ShoppingCart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ShoppingCart
include('material-4/Action/ShoppingCart')

' renders the element
ShoppingCart('ShoppingCart', 'Shopping Cart', 'an optional tech label')
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

' loads the Item which embeds the element ShoppingCart
include('material-4/Action/ShoppingCart')

' renders the element
ShoppingCart('ShoppingCart', 'Shopping Cart', 'an optional tech label')
@enduml
```

