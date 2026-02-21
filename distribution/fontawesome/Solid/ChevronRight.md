# ChevronRight


```text
fontawesome/Solid/ChevronRight
```

```text
include('fontawesome/Solid/ChevronRight')
```



| Illustration | ChevronRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChevronRight.png) | ![illustration for ChevronRight](../../fontawesome/Solid/ChevronRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChevronRightXs>`
- `<$ChevronRightSm>`
- `<$ChevronRightMd>`
- `<$ChevronRightLg>`





## ChevronRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChevronRight
include('fontawesome/Solid/ChevronRight')

' renders the element
ChevronRight('ChevronRight', 'Chevron Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChevronRight
include('fontawesome/Solid/ChevronRight')

' renders the element
ChevronRight('ChevronRight', 'Chevron Right', 'an optional tech label', 'an optional description')
@enduml
```

