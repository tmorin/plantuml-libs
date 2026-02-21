# WaterLadder


```text
fontawesome/Solid/WaterLadder
```

```text
include('fontawesome/Solid/WaterLadder')
```



| Illustration | WaterLadder |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WaterLadder.png) | ![illustration for WaterLadder](../../fontawesome/Solid/WaterLadder.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WaterLadderXs>`
- `<$WaterLadderSm>`
- `<$WaterLadderMd>`
- `<$WaterLadderLg>`





## WaterLadder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WaterLadder
include('fontawesome/Solid/WaterLadder')

' renders the element
WaterLadder('WaterLadder', 'Water Ladder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WaterLadder
include('fontawesome/Solid/WaterLadder')

' renders the element
WaterLadder('WaterLadder', 'Water Ladder', 'an optional tech label', 'an optional description')
@enduml
```

