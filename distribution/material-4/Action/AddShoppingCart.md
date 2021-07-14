# AddShoppingCart


```text
material-4/Action/AddShoppingCart
```

```text
include('material-4/Action/AddShoppingCart')
```



| Illustration | AddShoppingCart |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AddShoppingCart.png) | ![illustration for AddShoppingCart](../../material-4/Action/AddShoppingCart.Local.png) |




## AddShoppingCart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddShoppingCart
include('material-4/Action/AddShoppingCart')

' renders the element
AddShoppingCart('AddShoppingCart', 'Add Shopping Cart', 'an optional tech label')
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

' loads the Item which embeds the element AddShoppingCart
include('material-4/Action/AddShoppingCart')

' renders the element
AddShoppingCart('AddShoppingCart', 'Add Shopping Cart', 'an optional tech label')
@enduml
```

