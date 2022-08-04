# HardDrive


```text
fontawesome-6/Solid/HardDrive
```

```text
include('fontawesome-6/Solid/HardDrive')
```



| Illustration | HardDrive |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HardDrive.png) | ![illustration for HardDrive](../../fontawesome-6/Solid/HardDrive.Local.png) |




## HardDrive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HardDrive
include('fontawesome-6/Solid/HardDrive')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HardDrive
include('fontawesome-6/Solid/HardDrive')

' renders the element
HardDrive('HardDrive', 'Hard Drive', 'an optional tech label', 'an optional description')
@enduml
```

