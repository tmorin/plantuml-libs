# PenFancy


```text
fontawesome/Solid/PenFancy
```

```text
include('fontawesome/Solid/PenFancy')
```



| Illustration | PenFancy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PenFancy.png) | ![illustration for PenFancy](../../fontawesome/Solid/PenFancy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PenFancyXs>`
- `<$PenFancySm>`
- `<$PenFancyMd>`
- `<$PenFancyLg>`





## PenFancy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PenFancy
include('fontawesome/Solid/PenFancy')

' renders the element
PenFancy('PenFancy', 'Pen Fancy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PenFancy
include('fontawesome/Solid/PenFancy')

' renders the element
PenFancy('PenFancy', 'Pen Fancy', 'an optional tech label', 'an optional description')
@enduml
```

