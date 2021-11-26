# HourglassEnd


```text
fontawesome-5/Solid/HourglassEnd
```

```text
include('fontawesome-5/Solid/HourglassEnd')
```



| Illustration | HourglassEnd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HourglassEnd.png) | ![illustration for HourglassEnd](../../fontawesome-5/Solid/HourglassEnd.Local.png) |




## HourglassEnd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HourglassEnd
include('fontawesome-5/Solid/HourglassEnd')

' renders the element
HourglassEnd('HourglassEnd', 'Hourglass End', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HourglassEnd
include('fontawesome-5/Solid/HourglassEnd')

' renders the element
HourglassEnd('HourglassEnd', 'Hourglass End', 'an optional tech label')
@enduml
```

