# VolumeLow


```text
fontawesome/Solid/VolumeLow
```

```text
include('fontawesome/Solid/VolumeLow')
```



| Illustration | VolumeLow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VolumeLow.png) | ![illustration for VolumeLow](../../fontawesome/Solid/VolumeLow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolumeLowXs>`
- `<$VolumeLowSm>`
- `<$VolumeLowMd>`
- `<$VolumeLowLg>`





## VolumeLow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VolumeLow
include('fontawesome/Solid/VolumeLow')

' renders the element
VolumeLow('VolumeLow', 'Volume Low', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VolumeLow
include('fontawesome/Solid/VolumeLow')

' renders the element
VolumeLow('VolumeLow', 'Volume Low', 'an optional tech label', 'an optional description')
@enduml
```

