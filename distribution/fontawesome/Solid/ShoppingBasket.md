# ShoppingBasket


```text
fontawesome/Solid/ShoppingBasket
```

```text
include('fontawesome/Solid/ShoppingBasket')
```



| Illustration | ShoppingBasket |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ShoppingBasket.png) | ![illustration for ShoppingBasket](../../fontawesome/Solid/ShoppingBasket.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShoppingBasketXs>`
- `<$ShoppingBasketSm>`
- `<$ShoppingBasketMd>`
- `<$ShoppingBasketLg>`





## ShoppingBasket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShoppingBasket
include('fontawesome/Solid/ShoppingBasket')

' renders the element
ShoppingBasket('ShoppingBasket', 'Shopping Basket', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ShoppingBasket
include('fontawesome/Solid/ShoppingBasket')

' renders the element
ShoppingBasket('ShoppingBasket', 'Shopping Basket', 'an optional tech label', 'an optional description')
@enduml
```

