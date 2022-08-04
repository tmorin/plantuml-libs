# DriveFileRenameOutline


```text
material-4/File/DriveFileRenameOutline
```

```text
include('material-4/File/DriveFileRenameOutline')
```



| Illustration | DriveFileRenameOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/DriveFileRenameOutline.png) | ![illustration for DriveFileRenameOutline](../../material-4/File/DriveFileRenameOutline.Local.png) |




## DriveFileRenameOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DriveFileRenameOutline
include('material-4/File/DriveFileRenameOutline')

' renders the element
DriveFileRenameOutline('DriveFileRenameOutline', 'Drive File Rename Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DriveFileRenameOutline
include('material-4/File/DriveFileRenameOutline')

' renders the element
DriveFileRenameOutline('DriveFileRenameOutline', 'Drive File Rename Outline', 'an optional tech label', 'an optional description')
@enduml
```

