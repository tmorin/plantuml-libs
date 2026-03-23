# UndoAlt


```text
fontawesome/Solid/UndoAlt
```

```text
include('fontawesome/Solid/UndoAlt')
```



| Illustration | UndoAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UndoAlt.png) | ![illustration for UndoAlt](../../fontawesome/Solid/UndoAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UndoAltXs>`
- `<$UndoAltSm>`
- `<$UndoAltMd>`
- `<$UndoAltLg>`





## UndoAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UndoAlt
include('fontawesome/Solid/UndoAlt')

' renders the element
UndoAlt('UndoAlt', 'Undo Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UndoAlt
include('fontawesome/Solid/UndoAlt')

' renders the element
UndoAlt('UndoAlt', 'Undo Alt', 'an optional tech label', 'an optional description')
@enduml
```

