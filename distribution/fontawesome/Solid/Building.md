# Building


```text
fontawesome/Solid/Building
```

```text
include('fontawesome/Solid/Building')
```



| Illustration | Building |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Building.png) | ![illustration for Building](../../fontawesome/Solid/Building.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuildingXs>`
- `<$BuildingSm>`
- `<$BuildingMd>`
- `<$BuildingLg>`





## Building

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Building
include('fontawesome/Solid/Building')

' renders the element
Building('Building', 'Building', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Building
include('fontawesome/Solid/Building')

' renders the element
Building('Building', 'Building', 'an optional tech label', 'an optional description')
@enduml
```

