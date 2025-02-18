# Shopee


```text
simpleicons-14/S/Shopee
```

```text
include('simpleicons-14/S/Shopee')
```



| Illustration | Shopee |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Shopee.png) | ![illustration for Shopee](../../simpleicons-14/S/Shopee.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Shopee
include('simpleicons-14/S/Shopee')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Shopee
include('simpleicons-14/S/Shopee')

' renders the element
Shopee('Shopee', 'Shopee', 'an optional tech label', 'an optional description')
@enduml
```

