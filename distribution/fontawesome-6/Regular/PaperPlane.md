# PaperPlane


```text
fontawesome-6/Regular/PaperPlane
```

```text
include('fontawesome-6/Regular/PaperPlane')
```



| Illustration | PaperPlane |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/PaperPlane.png) | ![illustration for PaperPlane](../../fontawesome-6/Regular/PaperPlane.Local.png) |




## PaperPlane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PaperPlane
include('fontawesome-6/Regular/PaperPlane')

' renders the element
PaperPlane('PaperPlane', 'Paper Plane', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PaperPlane
include('fontawesome-6/Regular/PaperPlane')

' renders the element
PaperPlane('PaperPlane', 'Paper Plane', 'an optional tech label', 'an optional description')
@enduml
```

