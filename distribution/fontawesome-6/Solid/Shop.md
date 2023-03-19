# Shop


```text
fontawesome-6/Solid/Shop
```

```text
include('fontawesome-6/Solid/Shop')
```



| Illustration | Shop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Shop.png) | ![illustration for Shop](../../fontawesome-6/Solid/Shop.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Shop
include('fontawesome-6/Solid/Shop')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Shop
include('fontawesome-6/Solid/Shop')

' renders the element
Shop('Shop', 'Shop', 'an optional tech label', 'an optional description')
@enduml
```

