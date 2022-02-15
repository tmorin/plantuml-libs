# Webrtc


```text
simpleicons-6/W/Webrtc
```

```text
include('simpleicons-6/W/Webrtc')
```



| Illustration | Webrtc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Webrtc.png) | ![illustration for Webrtc](../../simpleicons-6/W/Webrtc.Local.png) |




## Webrtc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Webrtc
include('simpleicons-6/W/Webrtc')

' renders the element
Webrtc('Webrtc', 'Webrtc', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Webrtc
include('simpleicons-6/W/Webrtc')

' renders the element
Webrtc('Webrtc', 'Webrtc', 'an optional tech label')
@enduml
```

