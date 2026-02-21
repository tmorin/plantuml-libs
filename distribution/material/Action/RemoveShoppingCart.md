# RemoveShoppingCart


```text
material/Action/RemoveShoppingCart
```

```text
include('material/Action/RemoveShoppingCart')
```



| Illustration | RemoveShoppingCart |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/RemoveShoppingCart.png) | ![illustration for RemoveShoppingCart](../../material/Action/RemoveShoppingCart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RemoveShoppingCartXs>`
- `<$RemoveShoppingCartSm>`
- `<$RemoveShoppingCartMd>`
- `<$RemoveShoppingCartLg>`





## RemoveShoppingCart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RemoveShoppingCart
include('material/Action/RemoveShoppingCart')

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
include('material/bootstrap')

' loads the Item which embeds the element RemoveShoppingCart
include('material/Action/RemoveShoppingCart')

' renders the element
RemoveShoppingCart('RemoveShoppingCart', 'Remove Shopping Cart', 'an optional tech label', 'an optional description')
@enduml
```

