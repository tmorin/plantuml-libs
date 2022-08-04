# AlarmAdd


```text
material-4/Action/AlarmAdd
```

```text
include('material-4/Action/AlarmAdd')
```



| Illustration | AlarmAdd |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AlarmAdd.png) | ![illustration for AlarmAdd](../../material-4/Action/AlarmAdd.Local.png) |




## AlarmAdd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AlarmAdd
include('material-4/Action/AlarmAdd')

' renders the element
AlarmAdd('AlarmAdd', 'Alarm Add', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AlarmAdd
include('material-4/Action/AlarmAdd')

' renders the element
AlarmAdd('AlarmAdd', 'Alarm Add', 'an optional tech label', 'an optional description')
@enduml
```

