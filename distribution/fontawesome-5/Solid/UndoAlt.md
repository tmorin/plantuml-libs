# UndoAlt


```text
fontawesome-5/Solid/UndoAlt
```

```text
include('fontawesome-5/Solid/UndoAlt')
```



| Illustration | UndoAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UndoAlt.png) | ![illustration for UndoAlt](../../fontawesome-5/Solid/UndoAlt.Local.png) |




## UndoAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UndoAlt
include('fontawesome-5/Solid/UndoAlt')

' renders the element
UndoAlt('UndoAlt', 'Undo Alt', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UndoAlt
include('fontawesome-5/Solid/UndoAlt')

' renders the element
UndoAlt('UndoAlt', 'Undo Alt', 'an optional tech label')
@enduml
```

