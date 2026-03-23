# Teletype


```text
fontawesome/Solid/Teletype
```

```text
include('fontawesome/Solid/Teletype')
```



| Illustration | Teletype |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Teletype.png) | ![illustration for Teletype](../../fontawesome/Solid/Teletype.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TeletypeXs>`
- `<$TeletypeSm>`
- `<$TeletypeMd>`
- `<$TeletypeLg>`





## Teletype

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Teletype
include('fontawesome/Solid/Teletype')

' renders the element
Teletype('Teletype', 'Teletype', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Teletype
include('fontawesome/Solid/Teletype')

' renders the element
Teletype('Teletype', 'Teletype', 'an optional tech label', 'an optional description')
@enduml
```

