# S


```text
fontawesome/Solid/S
```

```text
include('fontawesome/Solid/S')
```



| Illustration | S |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/S.png) | ![illustration for S](../../fontawesome/Solid/S.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SXs>`
- `<$SSm>`
- `<$SMd>`
- `<$SLg>`





## S

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element S
include('fontawesome/Solid/S')

' renders the element
S('S', 'S', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element S
include('fontawesome/Solid/S')

' renders the element
S('S', 'S', 'an optional tech label', 'an optional description')
@enduml
```

