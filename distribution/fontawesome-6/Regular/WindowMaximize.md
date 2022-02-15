# WindowMaximize


```text
fontawesome-6/Regular/WindowMaximize
```

```text
include('fontawesome-6/Regular/WindowMaximize')
```



| Illustration | WindowMaximize |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/WindowMaximize.png) | ![illustration for WindowMaximize](../../fontawesome-6/Regular/WindowMaximize.Local.png) |




## WindowMaximize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WindowMaximize
include('fontawesome-6/Regular/WindowMaximize')

' renders the element
WindowMaximize('WindowMaximize', 'Window Maximize', 'an optional tech label')
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

' loads the Item which embeds the element WindowMaximize
include('fontawesome-6/Regular/WindowMaximize')

' renders the element
WindowMaximize('WindowMaximize', 'Window Maximize', 'an optional tech label')
@enduml
```

