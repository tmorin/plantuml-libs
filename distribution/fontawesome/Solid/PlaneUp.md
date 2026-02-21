# PlaneUp


```text
fontawesome/Solid/PlaneUp
```

```text
include('fontawesome/Solid/PlaneUp')
```



| Illustration | PlaneUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PlaneUp.png) | ![illustration for PlaneUp](../../fontawesome/Solid/PlaneUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaneUpXs>`
- `<$PlaneUpSm>`
- `<$PlaneUpMd>`
- `<$PlaneUpLg>`





## PlaneUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlaneUp
include('fontawesome/Solid/PlaneUp')

' renders the element
PlaneUp('PlaneUp', 'Plane Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlaneUp
include('fontawesome/Solid/PlaneUp')

' renders the element
PlaneUp('PlaneUp', 'Plane Up', 'an optional tech label', 'an optional description')
@enduml
```

