# HardDrive


```text
fontawesome/Regular/HardDrive
```

```text
include('fontawesome/Regular/HardDrive')
```



| Illustration | HardDrive |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HardDrive.png) | ![illustration for HardDrive](../../fontawesome/Regular/HardDrive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HardDriveXs>`
- `<$HardDriveSm>`
- `<$HardDriveMd>`
- `<$HardDriveLg>`





## HardDrive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HardDrive
include('fontawesome/Regular/HardDrive')

' renders the element
HardDrive('HardDrive', 'Hard Drive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HardDrive
include('fontawesome/Regular/HardDrive')

' renders the element
HardDrive('HardDrive', 'Hard Drive', 'an optional tech label', 'an optional description')
@enduml
```

