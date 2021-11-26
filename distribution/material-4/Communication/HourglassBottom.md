# HourglassBottom


```text
material-4/Communication/HourglassBottom
```

```text
include('material-4/Communication/HourglassBottom')
```



| Illustration | HourglassBottom |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/HourglassBottom.png) | ![illustration for HourglassBottom](../../material-4/Communication/HourglassBottom.Local.png) |




## HourglassBottom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HourglassBottom
include('material-4/Communication/HourglassBottom')

' renders the element
HourglassBottom('HourglassBottom', 'Hourglass Bottom', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element HourglassBottom
include('material-4/Communication/HourglassBottom')

' renders the element
HourglassBottom('HourglassBottom', 'Hourglass Bottom', 'an optional tech label')
@enduml
```

