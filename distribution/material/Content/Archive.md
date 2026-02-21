# Archive


```text
material/Content/Archive
```

```text
include('material/Content/Archive')
```



| Illustration | Archive |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/Archive.png) | ![illustration for Archive](../../material/Content/Archive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArchiveXs>`
- `<$ArchiveSm>`
- `<$ArchiveMd>`
- `<$ArchiveLg>`





## Archive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Archive
include('material/Content/Archive')

' renders the element
Archive('Archive', 'Archive', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Archive
include('material/Content/Archive')

' renders the element
Archive('Archive', 'Archive', 'an optional tech label', 'an optional description')
@enduml
```

