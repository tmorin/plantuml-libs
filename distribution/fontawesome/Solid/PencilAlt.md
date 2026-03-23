# PencilAlt


```text
fontawesome/Solid/PencilAlt
```

```text
include('fontawesome/Solid/PencilAlt')
```



| Illustration | PencilAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PencilAlt.png) | ![illustration for PencilAlt](../../fontawesome/Solid/PencilAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PencilAltXs>`
- `<$PencilAltSm>`
- `<$PencilAltMd>`
- `<$PencilAltLg>`





## PencilAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PencilAlt
include('fontawesome/Solid/PencilAlt')

' renders the element
PencilAlt('PencilAlt', 'Pencil Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PencilAlt
include('fontawesome/Solid/PencilAlt')

' renders the element
PencilAlt('PencilAlt', 'Pencil Alt', 'an optional tech label', 'an optional description')
@enduml
```

