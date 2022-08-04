# HourglassFull


```text
material-4/Action/HourglassFull
```

```text
include('material-4/Action/HourglassFull')
```



| Illustration | HourglassFull |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/HourglassFull.png) | ![illustration for HourglassFull](../../material-4/Action/HourglassFull.Local.png) |




## HourglassFull

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HourglassFull
include('material-4/Action/HourglassFull')

' renders the element
HourglassFull('HourglassFull', 'Hourglass Full', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HourglassFull
include('material-4/Action/HourglassFull')

' renders the element
HourglassFull('HourglassFull', 'Hourglass Full', 'an optional tech label', 'an optional description')
@enduml
```

