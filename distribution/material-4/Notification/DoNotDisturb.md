# DoNotDisturb


```text
material-4/Notification/DoNotDisturb
```

```text
include('material-4/Notification/DoNotDisturb')
```



| Illustration | DoNotDisturb |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/DoNotDisturb.png) | ![illustration for DoNotDisturb](../../material-4/Notification/DoNotDisturb.Local.png) |




## DoNotDisturb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DoNotDisturb
include('material-4/Notification/DoNotDisturb')

' renders the element
DoNotDisturb('DoNotDisturb', 'Do Not Disturb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DoNotDisturb
include('material-4/Notification/DoNotDisturb')

' renders the element
DoNotDisturb('DoNotDisturb', 'Do Not Disturb', 'an optional tech label', 'an optional description')
@enduml
```

