# MissedVideoCall


```text
material/Av/MissedVideoCall
```

```text
include('material/Av/MissedVideoCall')
```



| Illustration | MissedVideoCall |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/MissedVideoCall.png) | ![illustration for MissedVideoCall](../../material/Av/MissedVideoCall.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element MissedVideoCall
include('material/Av/MissedVideoCall')

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
include('material/bootstrap')

' loads the Item which embeds the element MissedVideoCall
include('material/Av/MissedVideoCall')

' renders the element
MissedVideoCall('MissedVideoCall', 'Missed Video Call', 'an optional tech label', 'an optional description')
@enduml
```

