# AddAlert


```text
material/Alert/AddAlert
```

```text
include('material/Alert/AddAlert')
```



| Illustration | AddAlert |
| :---: | :---: |
| ![illustration for Illustration](../../material/Alert/AddAlert.png) | ![illustration for AddAlert](../../material/Alert/AddAlert.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddAlertXs>`
- `<$AddAlertSm>`
- `<$AddAlertMd>`
- `<$AddAlertLg>`





## AddAlert

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AddAlert
include('material/Alert/AddAlert')

' renders the element
AddAlert('AddAlert', 'Add Alert', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AddAlert
include('material/Alert/AddAlert')

' renders the element
AddAlert('AddAlert', 'Add Alert', 'an optional tech label', 'an optional description')
@enduml
```

