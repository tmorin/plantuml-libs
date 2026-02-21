# Hammer


```text
fontawesome/Solid/Hammer
```

```text
include('fontawesome/Solid/Hammer')
```



| Illustration | Hammer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Hammer.png) | ![illustration for Hammer](../../fontawesome/Solid/Hammer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HammerXs>`
- `<$HammerSm>`
- `<$HammerMd>`
- `<$HammerLg>`





## Hammer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Hammer
include('fontawesome/Solid/Hammer')

' renders the element
Hammer('Hammer', 'Hammer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hammer
include('fontawesome/Solid/Hammer')

' renders the element
Hammer('Hammer', 'Hammer', 'an optional tech label', 'an optional description')
@enduml
```

