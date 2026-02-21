# PlaneSlash


```text
fontawesome/Solid/PlaneSlash
```

```text
include('fontawesome/Solid/PlaneSlash')
```



| Illustration | PlaneSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PlaneSlash.png) | ![illustration for PlaneSlash](../../fontawesome/Solid/PlaneSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaneSlashXs>`
- `<$PlaneSlashSm>`
- `<$PlaneSlashMd>`
- `<$PlaneSlashLg>`





## PlaneSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlaneSlash
include('fontawesome/Solid/PlaneSlash')

' renders the element
PlaneSlash('PlaneSlash', 'Plane Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlaneSlash
include('fontawesome/Solid/PlaneSlash')

' renders the element
PlaneSlash('PlaneSlash', 'Plane Slash', 'an optional tech label', 'an optional description')
@enduml
```

