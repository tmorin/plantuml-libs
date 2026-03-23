# Unlink


```text
fontawesome/Solid/Unlink
```

```text
include('fontawesome/Solid/Unlink')
```



| Illustration | Unlink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Unlink.png) | ![illustration for Unlink](../../fontawesome/Solid/Unlink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnlinkXs>`
- `<$UnlinkSm>`
- `<$UnlinkMd>`
- `<$UnlinkLg>`





## Unlink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Unlink
include('fontawesome/Solid/Unlink')

' renders the element
Unlink('Unlink', 'Unlink', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Unlink
include('fontawesome/Solid/Unlink')

' renders the element
Unlink('Unlink', 'Unlink', 'an optional tech label', 'an optional description')
@enduml
```

