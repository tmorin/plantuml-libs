# ScheduleSend


```text
material-4/Action/ScheduleSend
```

```text
include('material-4/Action/ScheduleSend')
```



| Illustration | ScheduleSend |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ScheduleSend.png) | ![illustration for ScheduleSend](../../material-4/Action/ScheduleSend.Local.png) |




## ScheduleSend

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ScheduleSend
include('material-4/Action/ScheduleSend')

' renders the element
ScheduleSend('ScheduleSend', 'Schedule Send', 'an optional tech label')
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

' loads the Item which embeds the element ScheduleSend
include('material-4/Action/ScheduleSend')

' renders the element
ScheduleSend('ScheduleSend', 'Schedule Send', 'an optional tech label')
@enduml
```

