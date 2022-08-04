# RemoveShoppingCart


```text
material-4/Action/RemoveShoppingCart
```

```text
include('material-4/Action/RemoveShoppingCart')
```



| Illustration | RemoveShoppingCart |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/RemoveShoppingCart.png) | ![illustration for RemoveShoppingCart](../../material-4/Action/RemoveShoppingCart.Local.png) |




## RemoveShoppingCart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RemoveShoppingCart
include('material-4/Action/RemoveShoppingCart')

' renders the element
RemoveShoppingCart('RemoveShoppingCart', 'Remove Shopping Cart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RemoveShoppingCart
include('material-4/Action/RemoveShoppingCart')

' renders the element
RemoveShoppingCart('RemoveShoppingCart', 'Remove Shopping Cart', 'an optional tech label', 'an optional description')
@enduml
```

