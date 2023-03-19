# NoteSticky


```text
fontawesome-6/Solid/NoteSticky
```

```text
include('fontawesome-6/Solid/NoteSticky')
```



| Illustration | NoteSticky |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/NoteSticky.png) | ![illustration for NoteSticky](../../fontawesome-6/Solid/NoteSticky.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NoteStickyXs>`
- `<$NoteStickySm>`
- `<$NoteStickyMd>`
- `<$NoteStickyLg>`





## NoteSticky

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element NoteSticky
include('fontawesome-6/Solid/NoteSticky')

' renders the element
NoteSticky('NoteSticky', 'Note Sticky', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NoteSticky
include('fontawesome-6/Solid/NoteSticky')

' renders the element
NoteSticky('NoteSticky', 'Note Sticky', 'an optional tech label', 'an optional description')
@enduml
```

