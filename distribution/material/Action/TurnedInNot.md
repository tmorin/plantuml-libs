# TurnedInNot


```text
material/Action/TurnedInNot
```

```text
include('material/Action/TurnedInNot')
```



| Illustration | TurnedInNot |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/TurnedInNot.png) | ![illustration for TurnedInNot](../../material/Action/TurnedInNot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TurnedInNotXs>`
- `<$TurnedInNotSm>`
- `<$TurnedInNotMd>`
- `<$TurnedInNotLg>`





## TurnedInNot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TurnedInNot
include('material/Action/TurnedInNot')

' renders the element
TurnedInNot('TurnedInNot', 'Turned In Not', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element TurnedInNot
include('material/Action/TurnedInNot')

' renders the element
TurnedInNot('TurnedInNot', 'Turned In Not', 'an optional tech label', 'an optional description')
@enduml
```

