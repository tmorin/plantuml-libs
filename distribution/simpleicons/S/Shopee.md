# Shopee


```text
simpleicons/S/Shopee
```

```text
include('simpleicons/S/Shopee')
```



| Illustration | Shopee |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Shopee.png) | ![illustration for Shopee](../../simpleicons/S/Shopee.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShopeeXs>`
- `<$ShopeeSm>`
- `<$ShopeeMd>`
- `<$ShopeeLg>`





## Shopee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Shopee
include('simpleicons/S/Shopee')

' renders the element
Shopee('Shopee', 'Shopee', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Shopee
include('simpleicons/S/Shopee')

' renders the element
Shopee('Shopee', 'Shopee', 'an optional tech label', 'an optional description')
@enduml
```

