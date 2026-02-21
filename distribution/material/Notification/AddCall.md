# AddCall


```text
material/Notification/AddCall
```

```text
include('material/Notification/AddCall')
```



| Illustration | AddCall |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/AddCall.png) | ![illustration for AddCall](../../material/Notification/AddCall.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element AddCall
include('material/Notification/AddCall')

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
include('material/bootstrap')

' loads the Item which embeds the element AddCall
include('material/Notification/AddCall')

' renders the element
AddCall('AddCall', 'Add Call', 'an optional tech label', 'an optional description')
@enduml
```

