# Shopware


```text
fontawesome-6/Brands/Shopware
```

```text
include('fontawesome-6/Brands/Shopware')
```



| Illustration | Shopware |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Shopware.png) | ![illustration for Shopware](../../fontawesome-6/Brands/Shopware.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Shopware
include('fontawesome-6/Brands/Shopware')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Shopware
include('fontawesome-6/Brands/Shopware')

' renders the element
Shopware('Shopware', 'Shopware', 'an optional tech label', 'an optional description')
@enduml
```

