# Drive File Rename Outline

```text
material-4.0/File/DriveFileRenameOutline
```

```text
include('material-4.0/File/DriveFileRenameOutline')
```

|icon|element|
|---|---|
|![](DriveFileRenameOutline.png)|![](DriveFileRenameOutline.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the DriveFileRenameOutline element
include('material-4.0/File/DriveFileRenameOutline')
DriveFileRenameOutline('drive_file_rename_outline', 'Drive File Rename Outline', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the DriveFileRenameOutline element
include('material-4.0/File/DriveFileRenameOutline')
DriveFileRenameOutline('drive_file_rename_outline', 'Drive File Rename Outline', 'an optional tech field')
@enduml
```

