# Undo


```text
fontawesome/Solid/Undo
```

```text
include('fontawesome/Solid/Undo')
```



| Illustration | Undo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Undo.png) | ![illustration for Undo](../../fontawesome/Solid/Undo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UndoXs>`
- `<$UndoSm>`
- `<$UndoMd>`
- `<$UndoLg>`





## Undo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Undo
include('fontawesome/Solid/Undo')

' renders the element
Undo('Undo', 'Undo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Undo
include('fontawesome/Solid/Undo')

' renders the element
Undo('Undo', 'Undo', 'an optional tech label', 'an optional description')
@enduml
```

