# SearchLocation


```text
fontawesome/Solid/SearchLocation
```

```text
include('fontawesome/Solid/SearchLocation')
```



| Illustration | SearchLocation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SearchLocation.png) | ![illustration for SearchLocation](../../fontawesome/Solid/SearchLocation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SearchLocationXs>`
- `<$SearchLocationSm>`
- `<$SearchLocationMd>`
- `<$SearchLocationLg>`





## SearchLocation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SearchLocation
include('fontawesome/Solid/SearchLocation')

' renders the element
SearchLocation('SearchLocation', 'Search Location', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SearchLocation
include('fontawesome/Solid/SearchLocation')

' renders the element
SearchLocation('SearchLocation', 'Search Location', 'an optional tech label', 'an optional description')
@enduml
```

