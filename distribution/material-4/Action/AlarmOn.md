# AlarmOn


```text
material-4/Action/AlarmOn
```

```text
include('material-4/Action/AlarmOn')
```



| Illustration | AlarmOn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AlarmOn.png) | ![illustration for AlarmOn](../../material-4/Action/AlarmOn.Local.png) |




## AlarmOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AlarmOn
include('material-4/Action/AlarmOn')

' renders the element
AlarmOn('AlarmOn', 'Alarm On', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AlarmOn
include('material-4/Action/AlarmOn')

' renders the element
AlarmOn('AlarmOn', 'Alarm On', 'an optional tech label', 'an optional description')
@enduml
```

