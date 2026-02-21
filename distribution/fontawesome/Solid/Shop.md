# Shop


```text
fontawesome/Solid/Shop
```

```text
include('fontawesome/Solid/Shop')
```



| Illustration | Shop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Shop.png) | ![illustration for Shop](../../fontawesome/Solid/Shop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShopXs>`
- `<$ShopSm>`
- `<$ShopMd>`
- `<$ShopLg>`





## Shop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Shop
include('fontawesome/Solid/Shop')

' renders the element
Shop('Shop', 'Shop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shop
include('fontawesome/Solid/Shop')

' renders the element
Shop('Shop', 'Shop', 'an optional tech label', 'an optional description')
@enduml
```

