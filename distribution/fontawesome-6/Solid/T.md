# T


```text
fontawesome-6/Solid/T
```

```text
include('fontawesome-6/Solid/T')
```



| Illustration | T |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/T.png) | ![illustration for T](../../fontawesome-6/Solid/T.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element T
include('fontawesome-6/Solid/T')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element T
include('fontawesome-6/Solid/T')

' renders the element
T('T', 'T', 'an optional tech label', 'an optional description')
@enduml
```

