# HillAvalanche


```text
fontawesome-6/Solid/HillAvalanche
```

```text
include('fontawesome-6/Solid/HillAvalanche')
```



| Illustration | HillAvalanche |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HillAvalanche.png) | ![illustration for HillAvalanche](../../fontawesome-6/Solid/HillAvalanche.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HillAvalancheXs>`
- `<$HillAvalancheSm>`
- `<$HillAvalancheMd>`
- `<$HillAvalancheLg>`





## HillAvalanche

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HillAvalanche
include('fontawesome-6/Solid/HillAvalanche')

' renders the element
HillAvalanche('HillAvalanche', 'Hill Avalanche', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HillAvalanche
include('fontawesome-6/Solid/HillAvalanche')

' renders the element
HillAvalanche('HillAvalanche', 'Hill Avalanche', 'an optional tech label', 'an optional description')
@enduml
```

