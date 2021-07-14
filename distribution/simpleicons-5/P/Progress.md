# Progress


```text
simpleicons-5/P/Progress
```

```text
include('simpleicons-5/P/Progress')
```



| Illustration | Progress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Progress.png) | ![illustration for Progress](../../simpleicons-5/P/Progress.Local.png) |




## Progress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Progress
include('simpleicons-5/P/Progress')

' renders the element
Progress('Progress', 'Progress', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Progress
include('simpleicons-5/P/Progress')

' renders the element
Progress('Progress', 'Progress', 'an optional tech label')
@enduml
```

