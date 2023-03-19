# DriveFileMoveOutline


```text
material-4/File/DriveFileMoveOutline
```

```text
include('material-4/File/DriveFileMoveOutline')
```



| Illustration | DriveFileMoveOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/DriveFileMoveOutline.png) | ![illustration for DriveFileMoveOutline](../../material-4/File/DriveFileMoveOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DriveFileMoveOutlineXs>`
- `<$DriveFileMoveOutlineSm>`
- `<$DriveFileMoveOutlineMd>`
- `<$DriveFileMoveOutlineLg>`





## DriveFileMoveOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DriveFileMoveOutline
include('material-4/File/DriveFileMoveOutline')

' renders the element
DriveFileMoveOutline('DriveFileMoveOutline', 'Drive File Move Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DriveFileMoveOutline
include('material-4/File/DriveFileMoveOutline')

' renders the element
DriveFileMoveOutline('DriveFileMoveOutline', 'Drive File Move Outline', 'an optional tech label', 'an optional description')
@enduml
```

