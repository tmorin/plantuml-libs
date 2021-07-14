# DriveEta


```text
material-4/Notification/DriveEta
```

```text
include('material-4/Notification/DriveEta')
```



| Illustration | DriveEta |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/DriveEta.png) | ![illustration for DriveEta](../../material-4/Notification/DriveEta.Local.png) |




## DriveEta

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DriveEta
include('material-4/Notification/DriveEta')

' renders the element
DriveEta('DriveEta', 'Drive Eta', 'an optional tech label')
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

' loads the Item which embeds the element DriveEta
include('material-4/Notification/DriveEta')

' renders the element
DriveEta('DriveEta', 'Drive Eta', 'an optional tech label')
@enduml
```

