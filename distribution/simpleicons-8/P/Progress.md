# Progress


```text
simpleicons-8/P/Progress
```

```text
include('simpleicons-8/P/Progress')
```



| Illustration | Progress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Progress.png) | ![illustration for Progress](../../simpleicons-8/P/Progress.Local.png) |




## Progress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Progress
include('simpleicons-8/P/Progress')

' renders the element
Progress('Progress', 'Progress', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Progress
include('simpleicons-8/P/Progress')

' renders the element
Progress('Progress', 'Progress', 'an optional tech label', 'an optional description')
@enduml
```

