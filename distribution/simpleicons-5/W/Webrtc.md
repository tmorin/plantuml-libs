# Webrtc


```text
simpleicons-5/W/Webrtc
```

```text
include('simpleicons-5/W/Webrtc')
```



| Illustration | Webrtc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Webrtc.png) | ![illustration for Webrtc](../../simpleicons-5/W/Webrtc.Local.png) |




## Webrtc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Webrtc
include('simpleicons-5/W/Webrtc')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Webrtc
include('simpleicons-5/W/Webrtc')

' renders the element
Webrtc('Webrtc', 'Webrtc', 'an optional tech label')
@enduml
```

