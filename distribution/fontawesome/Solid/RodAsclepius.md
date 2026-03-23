# RodAsclepius


```text
fontawesome/Solid/RodAsclepius
```

```text
include('fontawesome/Solid/RodAsclepius')
```



| Illustration | RodAsclepius |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RodAsclepius.png) | ![illustration for RodAsclepius](../../fontawesome/Solid/RodAsclepius.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RodAsclepiusXs>`
- `<$RodAsclepiusSm>`
- `<$RodAsclepiusMd>`
- `<$RodAsclepiusLg>`





## RodAsclepius

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RodAsclepius
include('fontawesome/Solid/RodAsclepius')

' renders the element
RodAsclepius('RodAsclepius', 'Rod Asclepius', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RodAsclepius
include('fontawesome/Solid/RodAsclepius')

' renders the element
RodAsclepius('RodAsclepius', 'Rod Asclepius', 'an optional tech label', 'an optional description')
@enduml
```

