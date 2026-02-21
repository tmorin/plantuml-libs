# BuildingWheat


```text
fontawesome/Solid/BuildingWheat
```

```text
include('fontawesome/Solid/BuildingWheat')
```



| Illustration | BuildingWheat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BuildingWheat.png) | ![illustration for BuildingWheat](../../fontawesome/Solid/BuildingWheat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuildingWheatXs>`
- `<$BuildingWheatSm>`
- `<$BuildingWheatMd>`
- `<$BuildingWheatLg>`





## BuildingWheat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BuildingWheat
include('fontawesome/Solid/BuildingWheat')

' renders the element
BuildingWheat('BuildingWheat', 'Building Wheat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BuildingWheat
include('fontawesome/Solid/BuildingWheat')

' renders the element
BuildingWheat('BuildingWheat', 'Building Wheat', 'an optional tech label', 'an optional description')
@enduml
```

