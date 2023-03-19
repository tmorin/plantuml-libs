# PeopleArrows


```text
fontawesome-6/Solid/PeopleArrows
```

```text
include('fontawesome-6/Solid/PeopleArrows')
```



| Illustration | PeopleArrows |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PeopleArrows.png) | ![illustration for PeopleArrows](../../fontawesome-6/Solid/PeopleArrows.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PeopleArrowsXs>`
- `<$PeopleArrowsSm>`
- `<$PeopleArrowsMd>`
- `<$PeopleArrowsLg>`





## PeopleArrows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PeopleArrows
include('fontawesome-6/Solid/PeopleArrows')

' renders the element
PeopleArrows('PeopleArrows', 'People Arrows', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PeopleArrows
include('fontawesome-6/Solid/PeopleArrows')

' renders the element
PeopleArrows('PeopleArrows', 'People Arrows', 'an optional tech label', 'an optional description')
@enduml
```

