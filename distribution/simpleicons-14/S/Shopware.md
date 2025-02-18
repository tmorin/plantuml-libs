# Shopware


```text
simpleicons-14/S/Shopware
```

```text
include('simpleicons-14/S/Shopware')
```



| Illustration | Shopware |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Shopware.png) | ![illustration for Shopware](../../simpleicons-14/S/Shopware.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShopwareXs>`
- `<$ShopwareSm>`
- `<$ShopwareMd>`
- `<$ShopwareLg>`





## Shopware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Shopware
include('simpleicons-14/S/Shopware')

' renders the element
Shopware('Shopware', 'Shopware', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shopware
include('simpleicons-14/S/Shopware')

' renders the element
Shopware('Shopware', 'Shopware', 'an optional tech label', 'an optional description')
@enduml
```

