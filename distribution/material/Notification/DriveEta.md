# DriveEta


```text
material/Notification/DriveEta
```

```text
include('material/Notification/DriveEta')
```



| Illustration | DriveEta |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/DriveEta.png) | ![illustration for DriveEta](../../material/Notification/DriveEta.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DriveEtaXs>`
- `<$DriveEtaSm>`
- `<$DriveEtaMd>`
- `<$DriveEtaLg>`





## DriveEta

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DriveEta
include('material/Notification/DriveEta')

' renders the element
DriveEta('DriveEta', 'Drive Eta', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DriveEta
include('material/Notification/DriveEta')

' renders the element
DriveEta('DriveEta', 'Drive Eta', 'an optional tech label', 'an optional description')
@enduml
```

