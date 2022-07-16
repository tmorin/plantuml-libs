# Ffmpeg


```text
simpleicons-7/F/Ffmpeg
```

```text
include('simpleicons-7/F/Ffmpeg')
```



| Illustration | Ffmpeg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Ffmpeg.png) | ![illustration for Ffmpeg](../../simpleicons-7/F/Ffmpeg.Local.png) |




## Ffmpeg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ffmpeg
include('simpleicons-7/F/Ffmpeg')

' renders the element
Ffmpeg('Ffmpeg', 'Ffmpeg', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ffmpeg
include('simpleicons-7/F/Ffmpeg')

' renders the element
Ffmpeg('Ffmpeg', 'Ffmpeg', 'an optional tech label')
@enduml
```

