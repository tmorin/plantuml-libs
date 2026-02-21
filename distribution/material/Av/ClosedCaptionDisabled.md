# ClosedCaptionDisabled


```text
material/Av/ClosedCaptionDisabled
```

```text
include('material/Av/ClosedCaptionDisabled')
```



| Illustration | ClosedCaptionDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/ClosedCaptionDisabled.png) | ![illustration for ClosedCaptionDisabled](../../material/Av/ClosedCaptionDisabled.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClosedCaptionDisabledXs>`
- `<$ClosedCaptionDisabledSm>`
- `<$ClosedCaptionDisabledMd>`
- `<$ClosedCaptionDisabledLg>`





## ClosedCaptionDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ClosedCaptionDisabled
include('material/Av/ClosedCaptionDisabled')

' renders the element
ClosedCaptionDisabled('ClosedCaptionDisabled', 'Closed Caption Disabled', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ClosedCaptionDisabled
include('material/Av/ClosedCaptionDisabled')

' renders the element
ClosedCaptionDisabled('ClosedCaptionDisabled', 'Closed Caption Disabled', 'an optional tech label', 'an optional description')
@enduml
```

