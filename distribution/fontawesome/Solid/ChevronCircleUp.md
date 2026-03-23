# ChevronCircleUp


```text
fontawesome/Solid/ChevronCircleUp
```

```text
include('fontawesome/Solid/ChevronCircleUp')
```



| Illustration | ChevronCircleUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChevronCircleUp.png) | ![illustration for ChevronCircleUp](../../fontawesome/Solid/ChevronCircleUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChevronCircleUpXs>`
- `<$ChevronCircleUpSm>`
- `<$ChevronCircleUpMd>`
- `<$ChevronCircleUpLg>`





## ChevronCircleUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChevronCircleUp
include('fontawesome/Solid/ChevronCircleUp')

' renders the element
ChevronCircleUp('ChevronCircleUp', 'Chevron Circle Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChevronCircleUp
include('fontawesome/Solid/ChevronCircleUp')

' renders the element
ChevronCircleUp('ChevronCircleUp', 'Chevron Circle Up', 'an optional tech label', 'an optional description')
@enduml
```

