# VolumeHigh


```text
fontawesome/Solid/VolumeHigh
```

```text
include('fontawesome/Solid/VolumeHigh')
```



| Illustration | VolumeHigh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VolumeHigh.png) | ![illustration for VolumeHigh](../../fontawesome/Solid/VolumeHigh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolumeHighXs>`
- `<$VolumeHighSm>`
- `<$VolumeHighMd>`
- `<$VolumeHighLg>`





## VolumeHigh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VolumeHigh
include('fontawesome/Solid/VolumeHigh')

' renders the element
VolumeHigh('VolumeHigh', 'Volume High', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VolumeHigh
include('fontawesome/Solid/VolumeHigh')

' renders the element
VolumeHigh('VolumeHigh', 'Volume High', 'an optional tech label', 'an optional description')
@enduml
```

