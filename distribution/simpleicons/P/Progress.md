# Progress


```text
simpleicons/P/Progress
```

```text
include('simpleicons/P/Progress')
```



| Illustration | Progress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Progress.png) | ![illustration for Progress](../../simpleicons/P/Progress.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProgressXs>`
- `<$ProgressSm>`
- `<$ProgressMd>`
- `<$ProgressLg>`





## Progress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Progress
include('simpleicons/P/Progress')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Progress
include('simpleicons/P/Progress')

' renders the element
Progress('Progress', 'Progress', 'an optional tech label', 'an optional description')
@enduml
```

