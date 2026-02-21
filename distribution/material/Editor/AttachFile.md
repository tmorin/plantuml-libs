# AttachFile


```text
material/Editor/AttachFile
```

```text
include('material/Editor/AttachFile')
```



| Illustration | AttachFile |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/AttachFile.png) | ![illustration for AttachFile](../../material/Editor/AttachFile.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AttachFileXs>`
- `<$AttachFileSm>`
- `<$AttachFileMd>`
- `<$AttachFileLg>`





## AttachFile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AttachFile
include('material/Editor/AttachFile')

' renders the element
AttachFile('AttachFile', 'Attach File', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AttachFile
include('material/Editor/AttachFile')

' renders the element
AttachFile('AttachFile', 'Attach File', 'an optional tech label', 'an optional description')
@enduml
```

