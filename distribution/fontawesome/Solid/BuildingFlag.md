# BuildingFlag


```text
fontawesome/Solid/BuildingFlag
```

```text
include('fontawesome/Solid/BuildingFlag')
```



| Illustration | BuildingFlag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BuildingFlag.png) | ![illustration for BuildingFlag](../../fontawesome/Solid/BuildingFlag.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuildingFlagXs>`
- `<$BuildingFlagSm>`
- `<$BuildingFlagMd>`
- `<$BuildingFlagLg>`





## BuildingFlag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BuildingFlag
include('fontawesome/Solid/BuildingFlag')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element BuildingFlag
include('fontawesome/Solid/BuildingFlag')

' renders the element
BuildingFlag('BuildingFlag', 'Building Flag', 'an optional tech label', 'an optional description')
@enduml
```

