# WindowMinimize


```text
fontawesome/Solid/WindowMinimize
```

```text
include('fontawesome/Solid/WindowMinimize')
```



| Illustration | WindowMinimize |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WindowMinimize.png) | ![illustration for WindowMinimize](../../fontawesome/Solid/WindowMinimize.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WindowMinimizeXs>`
- `<$WindowMinimizeSm>`
- `<$WindowMinimizeMd>`
- `<$WindowMinimizeLg>`





## WindowMinimize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WindowMinimize
include('fontawesome/Solid/WindowMinimize')

' renders the element
WindowMinimize('WindowMinimize', 'Window Minimize', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WindowMinimize
include('fontawesome/Solid/WindowMinimize')

' renders the element
WindowMinimize('WindowMinimize', 'Window Minimize', 'an optional tech label', 'an optional description')
@enduml
```

