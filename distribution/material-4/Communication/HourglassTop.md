# HourglassTop


```text
material-4/Communication/HourglassTop
```

```text
include('material-4/Communication/HourglassTop')
```



| Illustration | HourglassTop |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/HourglassTop.png) | ![illustration for HourglassTop](../../material-4/Communication/HourglassTop.Local.png) |




## HourglassTop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HourglassTop
include('material-4/Communication/HourglassTop')

' renders the element
HourglassTop('HourglassTop', 'Hourglass Top', 'an optional tech label')
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

' loads the Item which embeds the element HourglassTop
include('material-4/Communication/HourglassTop')

' renders the element
HourglassTop('HourglassTop', 'Hourglass Top', 'an optional tech label')
@enduml
```

