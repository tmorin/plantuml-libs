# MicExternalOn


```text
material/Image/MicExternalOn
```

```text
include('material/Image/MicExternalOn')
```



| Illustration | MicExternalOn |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/MicExternalOn.png) | ![illustration for MicExternalOn](../../material/Image/MicExternalOn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicExternalOnXs>`
- `<$MicExternalOnSm>`
- `<$MicExternalOnMd>`
- `<$MicExternalOnLg>`





## MicExternalOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MicExternalOn
include('material/Image/MicExternalOn')

' renders the element
MicExternalOn('MicExternalOn', 'Mic External On', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MicExternalOn
include('material/Image/MicExternalOn')

' renders the element
MicExternalOn('MicExternalOn', 'Mic External On', 'an optional tech label', 'an optional description')
@enduml
```

