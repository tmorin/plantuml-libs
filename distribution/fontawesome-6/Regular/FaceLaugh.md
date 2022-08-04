# FaceLaugh


```text
fontawesome-6/Regular/FaceLaugh
```

```text
include('fontawesome-6/Regular/FaceLaugh')
```



| Illustration | FaceLaugh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceLaugh.png) | ![illustration for FaceLaugh](../../fontawesome-6/Regular/FaceLaugh.Local.png) |




## FaceLaugh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceLaugh
include('fontawesome-6/Regular/FaceLaugh')

' renders the element
FaceLaugh('FaceLaugh', 'Face Laugh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceLaugh
include('fontawesome-6/Regular/FaceLaugh')

' renders the element
FaceLaugh('FaceLaugh', 'Face Laugh', 'an optional tech label', 'an optional description')
@enduml
```

