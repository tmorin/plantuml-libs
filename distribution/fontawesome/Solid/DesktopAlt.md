# DesktopAlt


```text
fontawesome/Solid/DesktopAlt
```

```text
include('fontawesome/Solid/DesktopAlt')
```



| Illustration | DesktopAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DesktopAlt.png) | ![illustration for DesktopAlt](../../fontawesome/Solid/DesktopAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DesktopAltXs>`
- `<$DesktopAltSm>`
- `<$DesktopAltMd>`
- `<$DesktopAltLg>`





## DesktopAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DesktopAlt
include('fontawesome/Solid/DesktopAlt')

' renders the element
DesktopAlt('DesktopAlt', 'Desktop Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DesktopAlt
include('fontawesome/Solid/DesktopAlt')

' renders the element
DesktopAlt('DesktopAlt', 'Desktop Alt', 'an optional tech label', 'an optional description')
@enduml
```

