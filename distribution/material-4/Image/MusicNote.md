# MusicNote


```text
material-4/Image/MusicNote
```

```text
include('material-4/Image/MusicNote')
```



| Illustration | MusicNote |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/MusicNote.png) | ![illustration for MusicNote](../../material-4/Image/MusicNote.Local.png) |




## MusicNote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MusicNote
include('material-4/Image/MusicNote')

' renders the element
MusicNote('MusicNote', 'Music Note', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element MusicNote
include('material-4/Image/MusicNote')

' renders the element
MusicNote('MusicNote', 'Music Note', 'an optional tech label', 'an optional description')
@enduml
```

