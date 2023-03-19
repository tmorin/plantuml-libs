# RailwayAlert


```text
material-4/Maps/RailwayAlert
```

```text
include('material-4/Maps/RailwayAlert')
```



| Illustration | RailwayAlert |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/RailwayAlert.png) | ![illustration for RailwayAlert](../../material-4/Maps/RailwayAlert.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RailwayAlertXs>`
- `<$RailwayAlertSm>`
- `<$RailwayAlertMd>`
- `<$RailwayAlertLg>`





## RailwayAlert

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RailwayAlert
include('material-4/Maps/RailwayAlert')

' renders the element
RailwayAlert('RailwayAlert', 'Railway Alert', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RailwayAlert
include('material-4/Maps/RailwayAlert')

' renders the element
RailwayAlert('RailwayAlert', 'Railway Alert', 'an optional tech label', 'an optional description')
@enduml
```

