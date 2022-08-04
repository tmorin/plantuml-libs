# InsertDriveFile


```text
material-4/Editor/InsertDriveFile
```

```text
include('material-4/Editor/InsertDriveFile')
```



| Illustration | InsertDriveFile |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/InsertDriveFile.png) | ![illustration for InsertDriveFile](../../material-4/Editor/InsertDriveFile.Local.png) |




## InsertDriveFile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element InsertDriveFile
include('material-4/Editor/InsertDriveFile')

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
include('material-4/bootstrap')

' loads the Item which embeds the element InsertDriveFile
include('material-4/Editor/InsertDriveFile')

' renders the element
InsertDriveFile('InsertDriveFile', 'Insert Drive File', 'an optional tech label', 'an optional description')
@enduml
```

