# Mixer


```text
fontawesome/Brands/Mixer
```

```text
include('fontawesome/Brands/Mixer')
```



| Illustration | Mixer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Mixer.png) | ![illustration for Mixer](../../fontawesome/Brands/Mixer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MixerXs>`
- `<$MixerSm>`
- `<$MixerMd>`
- `<$MixerLg>`





## Mixer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Mixer
include('fontawesome/Brands/Mixer')

' renders the element
Mixer('Mixer', 'Mixer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mixer
include('fontawesome/Brands/Mixer')

' renders the element
Mixer('Mixer', 'Mixer', 'an optional tech label', 'an optional description')
@enduml
```

