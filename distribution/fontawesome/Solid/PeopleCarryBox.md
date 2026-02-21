# PeopleCarryBox


```text
fontawesome/Solid/PeopleCarryBox
```

```text
include('fontawesome/Solid/PeopleCarryBox')
```



| Illustration | PeopleCarryBox |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PeopleCarryBox.png) | ![illustration for PeopleCarryBox](../../fontawesome/Solid/PeopleCarryBox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PeopleCarryBoxXs>`
- `<$PeopleCarryBoxSm>`
- `<$PeopleCarryBoxMd>`
- `<$PeopleCarryBoxLg>`





## PeopleCarryBox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PeopleCarryBox
include('fontawesome/Solid/PeopleCarryBox')

' renders the element
PeopleCarryBox('PeopleCarryBox', 'People Carry Box', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PeopleCarryBox
include('fontawesome/Solid/PeopleCarryBox')

' renders the element
PeopleCarryBox('PeopleCarryBox', 'People Carry Box', 'an optional tech label', 'an optional description')
@enduml
```

