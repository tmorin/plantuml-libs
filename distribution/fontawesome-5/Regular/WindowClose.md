# WindowClose


```text
fontawesome-5/Regular/WindowClose
```

```text
include('fontawesome-5/Regular/WindowClose')
```



| Illustration | WindowClose |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/WindowClose.png) | ![illustration for WindowClose](../../fontawesome-5/Regular/WindowClose.Local.png) |




## WindowClose

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WindowClose
include('fontawesome-5/Regular/WindowClose')

' renders the element
WindowClose('WindowClose', 'Window Close', 'an optional tech label')
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

' loads the Item which embeds the element WindowClose
include('fontawesome-5/Regular/WindowClose')

' renders the element
WindowClose('WindowClose', 'Window Close', 'an optional tech label')
@enduml
```

