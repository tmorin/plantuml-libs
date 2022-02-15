# WaterLadder


```text
fontawesome-6/Solid/WaterLadder
```

```text
include('fontawesome-6/Solid/WaterLadder')
```



| Illustration | WaterLadder |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/WaterLadder.png) | ![illustration for WaterLadder](../../fontawesome-6/Solid/WaterLadder.Local.png) |




## WaterLadder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WaterLadder
include('fontawesome-6/Solid/WaterLadder')

' renders the element
WaterLadder('WaterLadder', 'Water Ladder', 'an optional tech label')
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

' loads the Item which embeds the element WaterLadder
include('fontawesome-6/Solid/WaterLadder')

' renders the element
WaterLadder('WaterLadder', 'Water Ladder', 'an optional tech label')
@enduml
```

