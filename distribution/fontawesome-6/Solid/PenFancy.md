# PenFancy


```text
fontawesome-6/Solid/PenFancy
```

```text
include('fontawesome-6/Solid/PenFancy')
```



| Illustration | PenFancy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PenFancy.png) | ![illustration for PenFancy](../../fontawesome-6/Solid/PenFancy.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PenFancy
include('fontawesome-6/Solid/PenFancy')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PenFancy
include('fontawesome-6/Solid/PenFancy')

' renders the element
PenFancy('PenFancy', 'Pen Fancy', 'an optional tech label', 'an optional description')
@enduml
```

