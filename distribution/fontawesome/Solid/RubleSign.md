# RubleSign


```text
fontawesome/Solid/RubleSign
```

```text
include('fontawesome/Solid/RubleSign')
```



| Illustration | RubleSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RubleSign.png) | ![illustration for RubleSign](../../fontawesome/Solid/RubleSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RubleSignXs>`
- `<$RubleSignSm>`
- `<$RubleSignMd>`
- `<$RubleSignLg>`





## RubleSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RubleSign
include('fontawesome/Solid/RubleSign')

' renders the element
RubleSign('RubleSign', 'Ruble Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RubleSign
include('fontawesome/Solid/RubleSign')

' renders the element
RubleSign('RubleSign', 'Ruble Sign', 'an optional tech label', 'an optional description')
@enduml
```

