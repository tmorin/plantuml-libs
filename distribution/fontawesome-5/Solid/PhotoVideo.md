# PhotoVideo


```text
fontawesome-5/Solid/PhotoVideo
```

```text
include('fontawesome-5/Solid/PhotoVideo')
```



| Illustration | PhotoVideo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PhotoVideo.png) | ![illustration for PhotoVideo](../../fontawesome-5/Solid/PhotoVideo.Local.png) |




## PhotoVideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PhotoVideo
include('fontawesome-5/Solid/PhotoVideo')

' renders the element
PhotoVideo('PhotoVideo', 'Photo Video', 'an optional tech label')
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

' loads the Item which embeds the element PhotoVideo
include('fontawesome-5/Solid/PhotoVideo')

' renders the element
PhotoVideo('PhotoVideo', 'Photo Video', 'an optional tech label')
@enduml
```

