# StickyNote


```text
fontawesome-5/Solid/StickyNote
```

```text
include('fontawesome-5/Solid/StickyNote')
```



| Illustration | StickyNote |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/StickyNote.png) | ![illustration for StickyNote](../../fontawesome-5/Solid/StickyNote.Local.png) |




## StickyNote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StickyNote
include('fontawesome-5/Solid/StickyNote')

' renders the element
StickyNote('StickyNote', 'Sticky Note', 'an optional tech label')
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

' loads the Item which embeds the element StickyNote
include('fontawesome-5/Solid/StickyNote')

' renders the element
StickyNote('StickyNote', 'Sticky Note', 'an optional tech label')
@enduml
```

