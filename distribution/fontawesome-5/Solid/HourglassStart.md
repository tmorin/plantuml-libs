# HourglassStart


```text
fontawesome-5/Solid/HourglassStart
```

```text
include('fontawesome-5/Solid/HourglassStart')
```



| Illustration | HourglassStart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HourglassStart.png) | ![illustration for HourglassStart](../../fontawesome-5/Solid/HourglassStart.Local.png) |




## HourglassStart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HourglassStart
include('fontawesome-5/Solid/HourglassStart')

' renders the element
HourglassStart('HourglassStart', 'Hourglass Start', 'an optional tech label')
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

' loads the Item which embeds the element HourglassStart
include('fontawesome-5/Solid/HourglassStart')

' renders the element
HourglassStart('HourglassStart', 'Hourglass Start', 'an optional tech label')
@enduml
```

