# BuildingCircleExclamation


```text
fontawesome/Solid/BuildingCircleExclamation
```

```text
include('fontawesome/Solid/BuildingCircleExclamation')
```



| Illustration | BuildingCircleExclamation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BuildingCircleExclamation.png) | ![illustration for BuildingCircleExclamation](../../fontawesome/Solid/BuildingCircleExclamation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuildingCircleExclamationXs>`
- `<$BuildingCircleExclamationSm>`
- `<$BuildingCircleExclamationMd>`
- `<$BuildingCircleExclamationLg>`





## BuildingCircleExclamation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BuildingCircleExclamation
include('fontawesome/Solid/BuildingCircleExclamation')

' renders the element
BuildingCircleExclamation('BuildingCircleExclamation', 'Building Circle Exclamation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BuildingCircleExclamation
include('fontawesome/Solid/BuildingCircleExclamation')

' renders the element
BuildingCircleExclamation('BuildingCircleExclamation', 'Building Circle Exclamation', 'an optional tech label', 'an optional description')
@enduml
```

