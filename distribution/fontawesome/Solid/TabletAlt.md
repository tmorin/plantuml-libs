# TabletAlt


```text
fontawesome/Solid/TabletAlt
```

```text
include('fontawesome/Solid/TabletAlt')
```



| Illustration | TabletAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TabletAlt.png) | ![illustration for TabletAlt](../../fontawesome/Solid/TabletAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TabletAltXs>`
- `<$TabletAltSm>`
- `<$TabletAltMd>`
- `<$TabletAltLg>`





## TabletAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TabletAlt
include('fontawesome/Solid/TabletAlt')

' renders the element
TabletAlt('TabletAlt', 'Tablet Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TabletAlt
include('fontawesome/Solid/TabletAlt')

' renders the element
TabletAlt('TabletAlt', 'Tablet Alt', 'an optional tech label', 'an optional description')
@enduml
```

