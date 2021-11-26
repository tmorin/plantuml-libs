# Video


```text
fontawesome-5/Solid/Video
```

```text
include('fontawesome-5/Solid/Video')
```



| Illustration | Video |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Video.png) | ![illustration for Video](../../fontawesome-5/Solid/Video.Local.png) |




## Video

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Video
include('fontawesome-5/Solid/Video')

' renders the element
Video('Video', 'Video', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Video
include('fontawesome-5/Solid/Video')

' renders the element
Video('Video', 'Video', 'an optional tech label')
@enduml
```

