# VolumeXmark


```text
fontawesome/Solid/VolumeXmark
```

```text
include('fontawesome/Solid/VolumeXmark')
```



| Illustration | VolumeXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VolumeXmark.png) | ![illustration for VolumeXmark](../../fontawesome/Solid/VolumeXmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolumeXmarkXs>`
- `<$VolumeXmarkSm>`
- `<$VolumeXmarkMd>`
- `<$VolumeXmarkLg>`





## VolumeXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VolumeXmark
include('fontawesome/Solid/VolumeXmark')

' renders the element
VolumeXmark('VolumeXmark', 'Volume Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VolumeXmark
include('fontawesome/Solid/VolumeXmark')

' renders the element
VolumeXmark('VolumeXmark', 'Volume Xmark', 'an optional tech label', 'an optional description')
@enduml
```

