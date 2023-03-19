# MissedVideoCall


```text
material-4/Av/MissedVideoCall
```

```text
include('material-4/Av/MissedVideoCall')
```



| Illustration | MissedVideoCall |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/MissedVideoCall.png) | ![illustration for MissedVideoCall](../../material-4/Av/MissedVideoCall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MissedVideoCallXs>`
- `<$MissedVideoCallSm>`
- `<$MissedVideoCallMd>`
- `<$MissedVideoCallLg>`





## MissedVideoCall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MissedVideoCall
include('material-4/Av/MissedVideoCall')

' renders the element
MissedVideoCall('MissedVideoCall', 'Missed Video Call', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MissedVideoCall
include('material-4/Av/MissedVideoCall')

' renders the element
MissedVideoCall('MissedVideoCall', 'Missed Video Call', 'an optional tech label', 'an optional description')
@enduml
```

