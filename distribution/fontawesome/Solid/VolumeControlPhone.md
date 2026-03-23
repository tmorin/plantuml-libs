# VolumeControlPhone


```text
fontawesome/Solid/VolumeControlPhone
```

```text
include('fontawesome/Solid/VolumeControlPhone')
```



| Illustration | VolumeControlPhone |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VolumeControlPhone.png) | ![illustration for VolumeControlPhone](../../fontawesome/Solid/VolumeControlPhone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolumeControlPhoneXs>`
- `<$VolumeControlPhoneSm>`
- `<$VolumeControlPhoneMd>`
- `<$VolumeControlPhoneLg>`





## VolumeControlPhone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VolumeControlPhone
include('fontawesome/Solid/VolumeControlPhone')

' renders the element
VolumeControlPhone('VolumeControlPhone', 'Volume Control Phone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VolumeControlPhone
include('fontawesome/Solid/VolumeControlPhone')

' renders the element
VolumeControlPhone('VolumeControlPhone', 'Volume Control Phone', 'an optional tech label', 'an optional description')
@enduml
```

