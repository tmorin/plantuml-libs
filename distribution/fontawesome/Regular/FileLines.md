# FileLines


```text
fontawesome/Regular/FileLines
```

```text
include('fontawesome/Regular/FileLines')
```



| Illustration | FileLines |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FileLines.png) | ![illustration for FileLines](../../fontawesome/Regular/FileLines.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileLinesXs>`
- `<$FileLinesSm>`
- `<$FileLinesMd>`
- `<$FileLinesLg>`





## FileLines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileLines
include('fontawesome/Regular/FileLines')

' renders the element
FileLines('FileLines', 'File Lines', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileLines
include('fontawesome/Regular/FileLines')

' renders the element
FileLines('FileLines', 'File Lines', 'an optional tech label', 'an optional description')
@enduml
```

