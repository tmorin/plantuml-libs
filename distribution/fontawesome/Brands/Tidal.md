# Tidal


```text
fontawesome/Brands/Tidal
```

```text
include('fontawesome/Brands/Tidal')
```



| Illustration | Tidal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Tidal.png) | ![illustration for Tidal](../../fontawesome/Brands/Tidal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TidalXs>`
- `<$TidalSm>`
- `<$TidalMd>`
- `<$TidalLg>`





## Tidal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tidal
include('fontawesome/Brands/Tidal')

' renders the element
Tidal('Tidal', 'Tidal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tidal
include('fontawesome/Brands/Tidal')

' renders the element
Tidal('Tidal', 'Tidal', 'an optional tech label', 'an optional description')
@enduml
```

