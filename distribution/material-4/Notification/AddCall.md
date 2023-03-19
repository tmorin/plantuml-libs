# AddCall


```text
material-4/Notification/AddCall
```

```text
include('material-4/Notification/AddCall')
```



| Illustration | AddCall |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/AddCall.png) | ![illustration for AddCall](../../material-4/Notification/AddCall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddCallXs>`
- `<$AddCallSm>`
- `<$AddCallMd>`
- `<$AddCallLg>`





## AddCall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddCall
include('material-4/Notification/AddCall')

' renders the element
AddCall('AddCall', 'Add Call', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AddCall
include('material-4/Notification/AddCall')

' renders the element
AddCall('AddCall', 'Add Call', 'an optional tech label', 'an optional description')
@enduml
```

