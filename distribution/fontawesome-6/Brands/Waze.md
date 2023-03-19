# Waze


```text
fontawesome-6/Brands/Waze
```

```text
include('fontawesome-6/Brands/Waze')
```



| Illustration | Waze |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Waze.png) | ![illustration for Waze](../../fontawesome-6/Brands/Waze.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WazeXs>`
- `<$WazeSm>`
- `<$WazeMd>`
- `<$WazeLg>`





## Waze

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Waze
include('fontawesome-6/Brands/Waze')

' renders the element
Waze('Waze', 'Waze', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Waze
include('fontawesome-6/Brands/Waze')

' renders the element
Waze('Waze', 'Waze', 'an optional tech label', 'an optional description')
@enduml
```

