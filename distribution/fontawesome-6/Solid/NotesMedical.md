# NotesMedical


```text
fontawesome-6/Solid/NotesMedical
```

```text
include('fontawesome-6/Solid/NotesMedical')
```



| Illustration | NotesMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/NotesMedical.png) | ![illustration for NotesMedical](../../fontawesome-6/Solid/NotesMedical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotesMedicalXs>`
- `<$NotesMedicalSm>`
- `<$NotesMedicalMd>`
- `<$NotesMedicalLg>`





## NotesMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element NotesMedical
include('fontawesome-6/Solid/NotesMedical')

' renders the element
NotesMedical('NotesMedical', 'Notes Medical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NotesMedical
include('fontawesome-6/Solid/NotesMedical')

' renders the element
NotesMedical('NotesMedical', 'Notes Medical', 'an optional tech label', 'an optional description')
@enduml
```

