# Dumpster


```text
fontawesome/Solid/Dumpster
```

```text
include('fontawesome/Solid/Dumpster')
```



| Illustration | Dumpster |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Dumpster.png) | ![illustration for Dumpster](../../fontawesome/Solid/Dumpster.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DumpsterXs>`
- `<$DumpsterSm>`
- `<$DumpsterMd>`
- `<$DumpsterLg>`





## Dumpster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Dumpster
include('fontawesome/Solid/Dumpster')

' renders the element
Dumpster('Dumpster', 'Dumpster', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dumpster
include('fontawesome/Solid/Dumpster')

' renders the element
Dumpster('Dumpster', 'Dumpster', 'an optional tech label', 'an optional description')
@enduml
```

