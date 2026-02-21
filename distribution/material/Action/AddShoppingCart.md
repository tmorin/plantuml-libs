# AddShoppingCart


```text
material/Action/AddShoppingCart
```

```text
include('material/Action/AddShoppingCart')
```



| Illustration | AddShoppingCart |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/AddShoppingCart.png) | ![illustration for AddShoppingCart](../../material/Action/AddShoppingCart.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element AddShoppingCart
include('material/Action/AddShoppingCart')

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
include('material/bootstrap')

' loads the Item which embeds the element AddShoppingCart
include('material/Action/AddShoppingCart')

' renders the element
AddShoppingCart('AddShoppingCart', 'Add Shopping Cart', 'an optional tech label', 'an optional description')
@enduml
```

