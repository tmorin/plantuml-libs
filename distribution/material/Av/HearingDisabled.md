# HearingDisabled


```text
material/Av/HearingDisabled
```

```text
include('material/Av/HearingDisabled')
```



| Illustration | HearingDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/HearingDisabled.png) | ![illustration for HearingDisabled](../../material/Av/HearingDisabled.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HearingDisabledXs>`
- `<$HearingDisabledSm>`
- `<$HearingDisabledMd>`
- `<$HearingDisabledLg>`





## HearingDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element HearingDisabled
include('material/Av/HearingDisabled')

' renders the element
HearingDisabled('HearingDisabled', 'Hearing Disabled', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HearingDisabled
include('material/Av/HearingDisabled')

' renders the element
HearingDisabled('HearingDisabled', 'Hearing Disabled', 'an optional tech label', 'an optional description')
@enduml
```

