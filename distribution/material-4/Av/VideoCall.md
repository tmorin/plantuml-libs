# VideoCall


```text
material-4/Av/VideoCall
```

```text
include('material-4/Av/VideoCall')
```



| Illustration | VideoCall |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/VideoCall.png) | ![illustration for VideoCall](../../material-4/Av/VideoCall.Local.png) |




## VideoCall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VideoCall
include('material-4/Av/VideoCall')

' renders the element
VideoCall('VideoCall', 'Video Call', 'an optional tech label')
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

' loads the Item which embeds the element VideoCall
include('material-4/Av/VideoCall')

' renders the element
VideoCall('VideoCall', 'Video Call', 'an optional tech label')
@enduml
```

