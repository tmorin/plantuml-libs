# PenAlt


```text
fontawesome/Solid/PenAlt
```

```text
include('fontawesome/Solid/PenAlt')
```



| Illustration | PenAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PenAlt.png) | ![illustration for PenAlt](../../fontawesome/Solid/PenAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PenAltXs>`
- `<$PenAltSm>`
- `<$PenAltMd>`
- `<$PenAltLg>`





## PenAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PenAlt
include('fontawesome/Solid/PenAlt')

' renders the element
PenAlt('PenAlt', 'Pen Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PenAlt
include('fontawesome/Solid/PenAlt')

' renders the element
PenAlt('PenAlt', 'Pen Alt', 'an optional tech label', 'an optional description')
@enduml
```

