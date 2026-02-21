# BuildingCircleXmark


```text
fontawesome/Solid/BuildingCircleXmark
```

```text
include('fontawesome/Solid/BuildingCircleXmark')
```



| Illustration | BuildingCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BuildingCircleXmark.png) | ![illustration for BuildingCircleXmark](../../fontawesome/Solid/BuildingCircleXmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuildingCircleXmarkXs>`
- `<$BuildingCircleXmarkSm>`
- `<$BuildingCircleXmarkMd>`
- `<$BuildingCircleXmarkLg>`





## BuildingCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BuildingCircleXmark
include('fontawesome/Solid/BuildingCircleXmark')

' renders the element
BuildingCircleXmark('BuildingCircleXmark', 'Building Circle Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BuildingCircleXmark
include('fontawesome/Solid/BuildingCircleXmark')

' renders the element
BuildingCircleXmark('BuildingCircleXmark', 'Building Circle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

