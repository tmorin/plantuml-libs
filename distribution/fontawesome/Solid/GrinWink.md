# GrinWink


```text
fontawesome/Solid/GrinWink
```

```text
include('fontawesome/Solid/GrinWink')
```



| Illustration | GrinWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GrinWink.png) | ![illustration for GrinWink](../../fontawesome/Solid/GrinWink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrinWinkXs>`
- `<$GrinWinkSm>`
- `<$GrinWinkMd>`
- `<$GrinWinkLg>`





## GrinWink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GrinWink
include('fontawesome/Solid/GrinWink')

' renders the element
GrinWink('GrinWink', 'Grin Wink', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GrinWink
include('fontawesome/Solid/GrinWink')

' renders the element
GrinWink('GrinWink', 'Grin Wink', 'an optional tech label', 'an optional description')
@enduml
```

