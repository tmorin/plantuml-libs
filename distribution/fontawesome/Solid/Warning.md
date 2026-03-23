# Warning


```text
fontawesome/Solid/Warning
```

```text
include('fontawesome/Solid/Warning')
```



| Illustration | Warning |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Warning.png) | ![illustration for Warning](../../fontawesome/Solid/Warning.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WarningXs>`
- `<$WarningSm>`
- `<$WarningMd>`
- `<$WarningLg>`





## Warning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Warning
include('fontawesome/Solid/Warning')

' renders the element
Warning('Warning', 'Warning', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Warning
include('fontawesome/Solid/Warning')

' renders the element
Warning('Warning', 'Warning', 'an optional tech label', 'an optional description')
@enduml
```

