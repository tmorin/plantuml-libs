# T


```text
fontawesome/Solid/T
```

```text
include('fontawesome/Solid/T')
```



| Illustration | T |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/T.png) | ![illustration for T](../../fontawesome/Solid/T.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TXs>`
- `<$TSm>`
- `<$TMd>`
- `<$TLg>`





## T

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element T
include('fontawesome/Solid/T')

' renders the element
T('T', 'T', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element T
include('fontawesome/Solid/T')

' renders the element
T('T', 'T', 'an optional tech label', 'an optional description')
@enduml
```

