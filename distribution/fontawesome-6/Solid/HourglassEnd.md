# HourglassEnd


```text
fontawesome-6/Solid/HourglassEnd
```

```text
include('fontawesome-6/Solid/HourglassEnd')
```



| Illustration | HourglassEnd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HourglassEnd.png) | ![illustration for HourglassEnd](../../fontawesome-6/Solid/HourglassEnd.Local.png) |




## HourglassEnd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HourglassEnd
include('fontawesome-6/Solid/HourglassEnd')

' renders the element
HourglassEnd('HourglassEnd', 'Hourglass End', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HourglassEnd
include('fontawesome-6/Solid/HourglassEnd')

' renders the element
HourglassEnd('HourglassEnd', 'Hourglass End', 'an optional tech label', 'an optional description')
@enduml
```

