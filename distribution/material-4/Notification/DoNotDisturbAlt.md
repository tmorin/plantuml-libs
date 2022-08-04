# DoNotDisturbAlt


```text
material-4/Notification/DoNotDisturbAlt
```

```text
include('material-4/Notification/DoNotDisturbAlt')
```



| Illustration | DoNotDisturbAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/DoNotDisturbAlt.png) | ![illustration for DoNotDisturbAlt](../../material-4/Notification/DoNotDisturbAlt.Local.png) |




## DoNotDisturbAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DoNotDisturbAlt
include('material-4/Notification/DoNotDisturbAlt')

' renders the element
DoNotDisturbAlt('DoNotDisturbAlt', 'Do Not Disturb Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DoNotDisturbAlt
include('material-4/Notification/DoNotDisturbAlt')

' renders the element
DoNotDisturbAlt('DoNotDisturbAlt', 'Do Not Disturb Alt', 'an optional tech label', 'an optional description')
@enduml
```

