# WindowMaximize


```text
fontawesome/Regular/WindowMaximize
```

```text
include('fontawesome/Regular/WindowMaximize')
```



| Illustration | WindowMaximize |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/WindowMaximize.png) | ![illustration for WindowMaximize](../../fontawesome/Regular/WindowMaximize.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WindowMaximizeXs>`
- `<$WindowMaximizeSm>`
- `<$WindowMaximizeMd>`
- `<$WindowMaximizeLg>`





## WindowMaximize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WindowMaximize
include('fontawesome/Regular/WindowMaximize')

' renders the element
WindowMaximize('WindowMaximize', 'Window Maximize', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element WindowMaximize
include('fontawesome/Regular/WindowMaximize')

' renders the element
WindowMaximize('WindowMaximize', 'Window Maximize', 'an optional tech label', 'an optional description')
@enduml
```

