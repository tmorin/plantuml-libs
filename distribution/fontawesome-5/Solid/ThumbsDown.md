# ThumbsDown


```text
fontawesome-5/Solid/ThumbsDown
```

```text
include('fontawesome-5/Solid/ThumbsDown')
```



| Illustration | ThumbsDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ThumbsDown.png) | ![illustration for ThumbsDown](../../fontawesome-5/Solid/ThumbsDown.Local.png) |




## ThumbsDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ThumbsDown
include('fontawesome-5/Solid/ThumbsDown')

' renders the element
ThumbsDown('ThumbsDown', 'Thumbs Down', 'an optional tech label')
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

' loads the Item which embeds the element ThumbsDown
include('fontawesome-5/Solid/ThumbsDown')

' renders the element
ThumbsDown('ThumbsDown', 'Thumbs Down', 'an optional tech label')
@enduml
```

