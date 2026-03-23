# ShoppingCart


```text
fontawesome/Solid/ShoppingCart
```

```text
include('fontawesome/Solid/ShoppingCart')
```



| Illustration | ShoppingCart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ShoppingCart.png) | ![illustration for ShoppingCart](../../fontawesome/Solid/ShoppingCart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShoppingCartXs>`
- `<$ShoppingCartSm>`
- `<$ShoppingCartMd>`
- `<$ShoppingCartLg>`





## ShoppingCart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShoppingCart
include('fontawesome/Solid/ShoppingCart')

' renders the element
ShoppingCart('ShoppingCart', 'Shopping Cart', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShoppingCart
include('fontawesome/Solid/ShoppingCart')

' renders the element
ShoppingCart('ShoppingCart', 'Shopping Cart', 'an optional tech label', 'an optional description')
@enduml
```

