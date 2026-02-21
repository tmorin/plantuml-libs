# BagShopping


```text
fontawesome/Solid/BagShopping
```

```text
include('fontawesome/Solid/BagShopping')
```



| Illustration | BagShopping |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BagShopping.png) | ![illustration for BagShopping](../../fontawesome/Solid/BagShopping.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BagShoppingXs>`
- `<$BagShoppingSm>`
- `<$BagShoppingMd>`
- `<$BagShoppingLg>`





## BagShopping

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BagShopping
include('fontawesome/Solid/BagShopping')

' renders the element
BagShopping('BagShopping', 'Bag Shopping', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BagShopping
include('fontawesome/Solid/BagShopping')

' renders the element
BagShopping('BagShopping', 'Bag Shopping', 'an optional tech label', 'an optional description')
@enduml
```

