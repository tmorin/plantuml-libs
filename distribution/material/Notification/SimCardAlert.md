# SimCardAlert


```text
material/Notification/SimCardAlert
```

```text
include('material/Notification/SimCardAlert')
```



| Illustration | SimCardAlert |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/SimCardAlert.png) | ![illustration for SimCardAlert](../../material/Notification/SimCardAlert.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SimCardAlertXs>`
- `<$SimCardAlertSm>`
- `<$SimCardAlertMd>`
- `<$SimCardAlertLg>`





## SimCardAlert

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SimCardAlert
include('material/Notification/SimCardAlert')

' renders the element
SimCardAlert('SimCardAlert', 'Sim Card Alert', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element SimCardAlert
include('material/Notification/SimCardAlert')

' renders the element
SimCardAlert('SimCardAlert', 'Sim Card Alert', 'an optional tech label', 'an optional description')
@enduml
```

