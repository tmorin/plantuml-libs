# File


```text
fontawesome/Solid/File
```

```text
include('fontawesome/Solid/File')
```



| Illustration | File |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/File.png) | ![illustration for File](../../fontawesome/Solid/File.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileXs>`
- `<$FileSm>`
- `<$FileMd>`
- `<$FileLg>`





## File

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element File
include('fontawesome/Solid/File')

' renders the element
File('File', 'File', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element File
include('fontawesome/Solid/File')

' renders the element
File('File', 'File', 'an optional tech label', 'an optional description')
@enduml
```

