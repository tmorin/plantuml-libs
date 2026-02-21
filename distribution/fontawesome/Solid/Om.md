# Om


```text
fontawesome/Solid/Om
```

```text
include('fontawesome/Solid/Om')
```



| Illustration | Om |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Om.png) | ![illustration for Om](../../fontawesome/Solid/Om.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OmXs>`
- `<$OmSm>`
- `<$OmMd>`
- `<$OmLg>`





## Om

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Om
include('fontawesome/Solid/Om')

' renders the element
Om('Om', 'Om', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Om
include('fontawesome/Solid/Om')

' renders the element
Om('Om', 'Om', 'an optional tech label', 'an optional description')
@enduml
```

