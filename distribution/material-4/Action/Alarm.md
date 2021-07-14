# Alarm


```text
material-4/Action/Alarm
```

```text
include('material-4/Action/Alarm')
```



| Illustration | Alarm |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Alarm.png) | ![illustration for Alarm](../../material-4/Action/Alarm.Local.png) |




## Alarm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Alarm
include('material-4/Action/Alarm')

' renders the element
Alarm('Alarm', 'Alarm', 'an optional tech label')
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

' loads the Item which embeds the element Alarm
include('material-4/Action/Alarm')

' renders the element
Alarm('Alarm', 'Alarm', 'an optional tech label')
@enduml
```

