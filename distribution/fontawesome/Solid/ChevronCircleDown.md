# ChevronCircleDown


```text
fontawesome/Solid/ChevronCircleDown
```

```text
include('fontawesome/Solid/ChevronCircleDown')
```



| Illustration | ChevronCircleDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChevronCircleDown.png) | ![illustration for ChevronCircleDown](../../fontawesome/Solid/ChevronCircleDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChevronCircleDownXs>`
- `<$ChevronCircleDownSm>`
- `<$ChevronCircleDownMd>`
- `<$ChevronCircleDownLg>`





## ChevronCircleDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChevronCircleDown
include('fontawesome/Solid/ChevronCircleDown')

' renders the element
ChevronCircleDown('ChevronCircleDown', 'Chevron Circle Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChevronCircleDown
include('fontawesome/Solid/ChevronCircleDown')

' renders the element
ChevronCircleDown('ChevronCircleDown', 'Chevron Circle Down', 'an optional tech label', 'an optional description')
@enduml
```

