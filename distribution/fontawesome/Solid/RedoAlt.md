# RedoAlt


```text
fontawesome/Solid/RedoAlt
```

```text
include('fontawesome/Solid/RedoAlt')
```



| Illustration | RedoAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RedoAlt.png) | ![illustration for RedoAlt](../../fontawesome/Solid/RedoAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedoAltXs>`
- `<$RedoAltSm>`
- `<$RedoAltMd>`
- `<$RedoAltLg>`





## RedoAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RedoAlt
include('fontawesome/Solid/RedoAlt')

' renders the element
RedoAlt('RedoAlt', 'Redo Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RedoAlt
include('fontawesome/Solid/RedoAlt')

' renders the element
RedoAlt('RedoAlt', 'Redo Alt', 'an optional tech label', 'an optional description')
@enduml
```

