# WindowMinimize


```text
fontawesome-5/Regular/WindowMinimize
```

```text
include('fontawesome-5/Regular/WindowMinimize')
```



| Illustration | WindowMinimize |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/WindowMinimize.png) | ![illustration for WindowMinimize](../../fontawesome-5/Regular/WindowMinimize.Local.png) |




## WindowMinimize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WindowMinimize
include('fontawesome-5/Regular/WindowMinimize')

' renders the element
WindowMinimize('WindowMinimize', 'Window Minimize', 'an optional tech label')
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

' loads the Item which embeds the element WindowMinimize
include('fontawesome-5/Regular/WindowMinimize')

' renders the element
WindowMinimize('WindowMinimize', 'Window Minimize', 'an optional tech label')
@enduml
```

