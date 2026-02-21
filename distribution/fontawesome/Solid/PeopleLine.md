# PeopleLine


```text
fontawesome/Solid/PeopleLine
```

```text
include('fontawesome/Solid/PeopleLine')
```



| Illustration | PeopleLine |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PeopleLine.png) | ![illustration for PeopleLine](../../fontawesome/Solid/PeopleLine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PeopleLineXs>`
- `<$PeopleLineSm>`
- `<$PeopleLineMd>`
- `<$PeopleLineLg>`





## PeopleLine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PeopleLine
include('fontawesome/Solid/PeopleLine')

' renders the element
PeopleLine('PeopleLine', 'People Line', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PeopleLine
include('fontawesome/Solid/PeopleLine')

' renders the element
PeopleLine('PeopleLine', 'People Line', 'an optional tech label', 'an optional description')
@enduml
```

