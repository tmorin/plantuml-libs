# G


```text
fontawesome/Solid/G
```

```text
include('fontawesome/Solid/G')
```



| Illustration | G |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/G.png) | ![illustration for G](../../fontawesome/Solid/G.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GXs>`
- `<$GSm>`
- `<$GMd>`
- `<$GLg>`





## G

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element G
include('fontawesome/Solid/G')

' renders the element
G('G', 'G', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element G
include('fontawesome/Solid/G')

' renders the element
G('G', 'G', 'an optional tech label', 'an optional description')
@enduml
```

