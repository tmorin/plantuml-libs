# PeopleArrowsLeftRight


```text
fontawesome/Solid/PeopleArrowsLeftRight
```

```text
include('fontawesome/Solid/PeopleArrowsLeftRight')
```



| Illustration | PeopleArrowsLeftRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PeopleArrowsLeftRight.png) | ![illustration for PeopleArrowsLeftRight](../../fontawesome/Solid/PeopleArrowsLeftRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PeopleArrowsLeftRightXs>`
- `<$PeopleArrowsLeftRightSm>`
- `<$PeopleArrowsLeftRightMd>`
- `<$PeopleArrowsLeftRightLg>`





## PeopleArrowsLeftRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PeopleArrowsLeftRight
include('fontawesome/Solid/PeopleArrowsLeftRight')

' renders the element
PeopleArrowsLeftRight('PeopleArrowsLeftRight', 'People Arrows Left Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PeopleArrowsLeftRight
include('fontawesome/Solid/PeopleArrowsLeftRight')

' renders the element
PeopleArrowsLeftRight('PeopleArrowsLeftRight', 'People Arrows Left Right', 'an optional tech label', 'an optional description')
@enduml
```

