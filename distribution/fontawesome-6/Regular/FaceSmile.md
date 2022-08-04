# FaceSmile


```text
fontawesome-6/Regular/FaceSmile
```

```text
include('fontawesome-6/Regular/FaceSmile')
```



| Illustration | FaceSmile |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceSmile.png) | ![illustration for FaceSmile](../../fontawesome-6/Regular/FaceSmile.Local.png) |




## FaceSmile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceSmile
include('fontawesome-6/Regular/FaceSmile')

' renders the element
FaceSmile('FaceSmile', 'Face Smile', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceSmile
include('fontawesome-6/Regular/FaceSmile')

' renders the element
FaceSmile('FaceSmile', 'Face Smile', 'an optional tech label', 'an optional description')
@enduml
```

