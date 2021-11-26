# DoNotDisturbOn


```text
material-4/Notification/DoNotDisturbOn
```

```text
include('material-4/Notification/DoNotDisturbOn')
```



| Illustration | DoNotDisturbOn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/DoNotDisturbOn.png) | ![illustration for DoNotDisturbOn](../../material-4/Notification/DoNotDisturbOn.Local.png) |




## DoNotDisturbOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DoNotDisturbOn
include('material-4/Notification/DoNotDisturbOn')

' renders the element
DoNotDisturbOn('DoNotDisturbOn', 'Do Not Disturb On', 'an optional tech label')
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

' loads the Item which embeds the element DoNotDisturbOn
include('material-4/Notification/DoNotDisturbOn')

' renders the element
DoNotDisturbOn('DoNotDisturbOn', 'Do Not Disturb On', 'an optional tech label')
@enduml
```

