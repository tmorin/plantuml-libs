# Pills


```text
fontawesome/Solid/Pills
```

```text
include('fontawesome/Solid/Pills')
```



| Illustration | Pills |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Pills.png) | ![illustration for Pills](../../fontawesome/Solid/Pills.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PillsXs>`
- `<$PillsSm>`
- `<$PillsMd>`
- `<$PillsLg>`





## Pills

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pills
include('fontawesome/Solid/Pills')

' renders the element
Pills('Pills', 'Pills', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pills
include('fontawesome/Solid/Pills')

' renders the element
Pills('Pills', 'Pills', 'an optional tech label', 'an optional description')
@enduml
```

