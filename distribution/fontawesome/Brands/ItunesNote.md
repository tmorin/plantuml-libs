# ItunesNote


```text
fontawesome/Brands/ItunesNote
```

```text
include('fontawesome/Brands/ItunesNote')
```



| Illustration | ItunesNote |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/ItunesNote.png) | ![illustration for ItunesNote](../../fontawesome/Brands/ItunesNote.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ItunesNoteXs>`
- `<$ItunesNoteSm>`
- `<$ItunesNoteMd>`
- `<$ItunesNoteLg>`





## ItunesNote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ItunesNote
include('fontawesome/Brands/ItunesNote')

' renders the element
ItunesNote('ItunesNote', 'Itunes Note', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ItunesNote
include('fontawesome/Brands/ItunesNote')

' renders the element
ItunesNote('ItunesNote', 'Itunes Note', 'an optional tech label', 'an optional description')
@enduml
```

