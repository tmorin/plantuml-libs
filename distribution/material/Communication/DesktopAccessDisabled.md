# DesktopAccessDisabled


```text
material/Communication/DesktopAccessDisabled
```

```text
include('material/Communication/DesktopAccessDisabled')
```



| Illustration | DesktopAccessDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/DesktopAccessDisabled.png) | ![illustration for DesktopAccessDisabled](../../material/Communication/DesktopAccessDisabled.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DesktopAccessDisabledXs>`
- `<$DesktopAccessDisabledSm>`
- `<$DesktopAccessDisabledMd>`
- `<$DesktopAccessDisabledLg>`





## DesktopAccessDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DesktopAccessDisabled
include('material/Communication/DesktopAccessDisabled')

' renders the element
DesktopAccessDisabled('DesktopAccessDisabled', 'Desktop Access Disabled', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DesktopAccessDisabled
include('material/Communication/DesktopAccessDisabled')

' renders the element
DesktopAccessDisabled('DesktopAccessDisabled', 'Desktop Access Disabled', 'an optional tech label', 'an optional description')
@enduml
```

