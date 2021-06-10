# NotesMedical


```text
fontawesome-5/Solid/NotesMedical
```

```text
include('fontawesome-5/Solid/NotesMedical')
```



| Illustration | NotesMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/NotesMedical.png) | ![illustration for NotesMedical](../../fontawesome-5/Solid/NotesMedical.Local.png) |




## NotesMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element NotesMedical
include('fontawesome-5/Solid/NotesMedical')

' renders the element
NotesMedical('NotesMedical', 'Notes Medical', 'an optional tech label')
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

' loads the Item which embeds the element NotesMedical
include('fontawesome-5/Solid/NotesMedical')

' renders the element
NotesMedical('NotesMedical', 'Notes Medical', 'an optional tech label')
@enduml
```

