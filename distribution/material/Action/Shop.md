# Shop


```text
material/Action/Shop
```

```text
include('material/Action/Shop')
```



| Illustration | Shop |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Shop.png) | ![illustration for Shop](../../material/Action/Shop.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Shop
include('material/Action/Shop')

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
include('material/bootstrap')

' loads the Item which embeds the element Shop
include('material/Action/Shop')

' renders the element
Shop('Shop', 'Shop', 'an optional tech label', 'an optional description')
@enduml
```

