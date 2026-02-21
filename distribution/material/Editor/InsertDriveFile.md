# InsertDriveFile


```text
material/Editor/InsertDriveFile
```

```text
include('material/Editor/InsertDriveFile')
```



| Illustration | InsertDriveFile |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/InsertDriveFile.png) | ![illustration for InsertDriveFile](../../material/Editor/InsertDriveFile.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InsertDriveFileXs>`
- `<$InsertDriveFileSm>`
- `<$InsertDriveFileMd>`
- `<$InsertDriveFileLg>`





## InsertDriveFile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element InsertDriveFile
include('material/Editor/InsertDriveFile')

' renders the element
InsertDriveFile('InsertDriveFile', 'Insert Drive File', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element InsertDriveFile
include('material/Editor/InsertDriveFile')

' renders the element
InsertDriveFile('InsertDriveFile', 'Insert Drive File', 'an optional tech label', 'an optional description')
@enduml
```

