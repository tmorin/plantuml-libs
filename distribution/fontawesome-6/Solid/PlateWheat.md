# PlateWheat


```text
fontawesome-6/Solid/PlateWheat
```

```text
include('fontawesome-6/Solid/PlateWheat')
```



| Illustration | PlateWheat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PlateWheat.png) | ![illustration for PlateWheat](../../fontawesome-6/Solid/PlateWheat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlateWheatXs>`
- `<$PlateWheatSm>`
- `<$PlateWheatMd>`
- `<$PlateWheatLg>`





## PlateWheat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlateWheat
include('fontawesome-6/Solid/PlateWheat')

' renders the element
PlateWheat('PlateWheat', 'Plate Wheat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlateWheat
include('fontawesome-6/Solid/PlateWheat')

' renders the element
PlateWheat('PlateWheat', 'Plate Wheat', 'an optional tech label', 'an optional description')
@enduml
```

