# DesktopAccessDisabled


```text
material-4/Communication/DesktopAccessDisabled
```

```text
include('material-4/Communication/DesktopAccessDisabled')
```



| Illustration | DesktopAccessDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/DesktopAccessDisabled.png) | ![illustration for DesktopAccessDisabled](../../material-4/Communication/DesktopAccessDisabled.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element DesktopAccessDisabled
include('material-4/Communication/DesktopAccessDisabled')

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
include('material-4/bootstrap')

' loads the Item which embeds the element DesktopAccessDisabled
include('material-4/Communication/DesktopAccessDisabled')

' renders the element
DesktopAccessDisabled('DesktopAccessDisabled', 'Desktop Access Disabled', 'an optional tech label', 'an optional description')
@enduml
```

