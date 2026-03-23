# FireAlt


```text
fontawesome/Solid/FireAlt
```

```text
include('fontawesome/Solid/FireAlt')
```



| Illustration | FireAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FireAlt.png) | ![illustration for FireAlt](../../fontawesome/Solid/FireAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FireAltXs>`
- `<$FireAltSm>`
- `<$FireAltMd>`
- `<$FireAltLg>`





## FireAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FireAlt
include('fontawesome/Solid/FireAlt')

' renders the element
FireAlt('FireAlt', 'Fire Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FireAlt
include('fontawesome/Solid/FireAlt')

' renders the element
FireAlt('FireAlt', 'Fire Alt', 'an optional tech label', 'an optional description')
@enduml
```

