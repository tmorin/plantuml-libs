# PeopleCarry


```text
fontawesome/Solid/PeopleCarry
```

```text
include('fontawesome/Solid/PeopleCarry')
```



| Illustration | PeopleCarry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PeopleCarry.png) | ![illustration for PeopleCarry](../../fontawesome/Solid/PeopleCarry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PeopleCarryXs>`
- `<$PeopleCarrySm>`
- `<$PeopleCarryMd>`
- `<$PeopleCarryLg>`





## PeopleCarry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PeopleCarry
include('fontawesome/Solid/PeopleCarry')

' renders the element
PeopleCarry('PeopleCarry', 'People Carry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PeopleCarry
include('fontawesome/Solid/PeopleCarry')

' renders the element
PeopleCarry('PeopleCarry', 'People Carry', 'an optional tech label', 'an optional description')
@enduml
```

