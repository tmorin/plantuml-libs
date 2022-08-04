# BuildingFlag


```text
fontawesome-6/Solid/BuildingFlag
```

```text
include('fontawesome-6/Solid/BuildingFlag')
```



| Illustration | BuildingFlag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BuildingFlag.png) | ![illustration for BuildingFlag](../../fontawesome-6/Solid/BuildingFlag.Local.png) |




## BuildingFlag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BuildingFlag
include('fontawesome-6/Solid/BuildingFlag')

' renders the element
BuildingFlag('BuildingFlag', 'Building Flag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BuildingFlag
include('fontawesome-6/Solid/BuildingFlag')

' renders the element
BuildingFlag('BuildingFlag', 'Building Flag', 'an optional tech label', 'an optional description')
@enduml
```

