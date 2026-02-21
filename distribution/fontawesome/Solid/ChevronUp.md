# ChevronUp


```text
fontawesome/Solid/ChevronUp
```

```text
include('fontawesome/Solid/ChevronUp')
```



| Illustration | ChevronUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChevronUp.png) | ![illustration for ChevronUp](../../fontawesome/Solid/ChevronUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChevronUpXs>`
- `<$ChevronUpSm>`
- `<$ChevronUpMd>`
- `<$ChevronUpLg>`





## ChevronUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChevronUp
include('fontawesome/Solid/ChevronUp')

' renders the element
ChevronUp('ChevronUp', 'Chevron Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChevronUp
include('fontawesome/Solid/ChevronUp')

' renders the element
ChevronUp('ChevronUp', 'Chevron Up', 'an optional tech label', 'an optional description')
@enduml
```

