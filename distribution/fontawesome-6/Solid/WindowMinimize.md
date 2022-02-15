# WindowMinimize


```text
fontawesome-6/Solid/WindowMinimize
```

```text
include('fontawesome-6/Solid/WindowMinimize')
```



| Illustration | WindowMinimize |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/WindowMinimize.png) | ![illustration for WindowMinimize](../../fontawesome-6/Solid/WindowMinimize.Local.png) |




## WindowMinimize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WindowMinimize
include('fontawesome-6/Solid/WindowMinimize')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WindowMinimize
include('fontawesome-6/Solid/WindowMinimize')

' renders the element
WindowMinimize('WindowMinimize', 'Window Minimize', 'an optional tech label')
@enduml
```

