# ItunesNote


```text
fontawesome-5/Brands/ItunesNote
```

```text
include('fontawesome-5/Brands/ItunesNote')
```



| Illustration | ItunesNote |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/ItunesNote.png) | ![illustration for ItunesNote](../../fontawesome-5/Brands/ItunesNote.Local.png) |




## ItunesNote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ItunesNote
include('fontawesome-5/Brands/ItunesNote')

' renders the element
ItunesNote('ItunesNote', 'Itunes Note', 'an optional tech label')
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

' loads the Item which embeds the element ItunesNote
include('fontawesome-5/Brands/ItunesNote')

' renders the element
ItunesNote('ItunesNote', 'Itunes Note', 'an optional tech label')
@enduml
```

