# NotesMedical


```text
fontawesome/Solid/NotesMedical
```

```text
include('fontawesome/Solid/NotesMedical')
```



| Illustration | NotesMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/NotesMedical.png) | ![illustration for NotesMedical](../../fontawesome/Solid/NotesMedical.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element NotesMedical
include('fontawesome/Solid/NotesMedical')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element NotesMedical
include('fontawesome/Solid/NotesMedical')

' renders the element
NotesMedical('NotesMedical', 'Notes Medical', 'an optional tech label', 'an optional description')
@enduml
```

