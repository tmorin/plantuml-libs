# Desktop


```text
fontawesome-6/Solid/Desktop
```

```text
include('fontawesome-6/Solid/Desktop')
```



| Illustration | Desktop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Desktop.png) | ![illustration for Desktop](../../fontawesome-6/Solid/Desktop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DesktopXs>`
- `<$DesktopSm>`
- `<$DesktopMd>`
- `<$DesktopLg>`





## Desktop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Desktop
include('fontawesome-6/Solid/Desktop')

' renders the element
Desktop('Desktop', 'Desktop', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Desktop
include('fontawesome-6/Solid/Desktop')

' renders the element
Desktop('Desktop', 'Desktop', 'an optional tech label', 'an optional description')
@enduml
```

