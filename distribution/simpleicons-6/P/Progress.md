# Progress


```text
simpleicons-6/P/Progress
```

```text
include('simpleicons-6/P/Progress')
```



| Illustration | Progress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Progress.png) | ![illustration for Progress](../../simpleicons-6/P/Progress.Local.png) |




## Progress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Progress
include('simpleicons-6/P/Progress')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Progress
include('simpleicons-6/P/Progress')

' renders the element
Progress('Progress', 'Progress', 'an optional tech label')
@enduml
```

