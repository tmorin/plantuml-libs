# Sellcast


```text
fontawesome/Brands/Sellcast
```

```text
include('fontawesome/Brands/Sellcast')
```



| Illustration | Sellcast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Sellcast.png) | ![illustration for Sellcast](../../fontawesome/Brands/Sellcast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SellcastXs>`
- `<$SellcastSm>`
- `<$SellcastMd>`
- `<$SellcastLg>`





## Sellcast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Sellcast
include('fontawesome/Brands/Sellcast')

' renders the element
Sellcast('Sellcast', 'Sellcast', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sellcast
include('fontawesome/Brands/Sellcast')

' renders the element
Sellcast('Sellcast', 'Sellcast', 'an optional tech label', 'an optional description')
@enduml
```

