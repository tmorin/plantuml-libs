# Volume


```text
fontawesome/Solid/Volume
```

```text
include('fontawesome/Solid/Volume')
```



| Illustration | Volume |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Volume.png) | ![illustration for Volume](../../fontawesome/Solid/Volume.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolumeXs>`
- `<$VolumeSm>`
- `<$VolumeMd>`
- `<$VolumeLg>`





## Volume

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Volume
include('fontawesome/Solid/Volume')

' renders the element
Volume('Volume', 'Volume', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Volume
include('fontawesome/Solid/Volume')

' renders the element
Volume('Volume', 'Volume', 'an optional tech label', 'an optional description')
@enduml
```

