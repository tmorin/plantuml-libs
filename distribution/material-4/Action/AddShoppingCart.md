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



## Sprites
The item provides the following sriptes:

- `<$AddShoppingCartXs>`
- `<$AddShoppingCartSm>`
- `<$AddShoppingCartMd>`
- `<$AddShoppingCartLg>`





## AddShoppingCart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddShoppingCart
include('material-4/Action/AddShoppingCart')

' renders the element
AddShoppingCart('AddShoppingCart', 'Add Shopping Cart', 'an optional tech label', 'an optional description')
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
AddShoppingCart('AddShoppingCart', 'Add Shopping Cart', 'an optional tech label', 'an optional description')
@enduml
```

