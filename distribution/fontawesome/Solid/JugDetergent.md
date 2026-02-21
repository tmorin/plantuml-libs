# JugDetergent


```text
fontawesome/Solid/JugDetergent
```

```text
include('fontawesome/Solid/JugDetergent')
```



| Illustration | JugDetergent |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/JugDetergent.png) | ![illustration for JugDetergent](../../fontawesome/Solid/JugDetergent.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JugDetergentXs>`
- `<$JugDetergentSm>`
- `<$JugDetergentMd>`
- `<$JugDetergentLg>`





## JugDetergent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element JugDetergent
include('fontawesome/Solid/JugDetergent')

' renders the element
JugDetergent('JugDetergent', 'Jug Detergent', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element JugDetergent
include('fontawesome/Solid/JugDetergent')

' renders the element
JugDetergent('JugDetergent', 'Jug Detergent', 'an optional tech label', 'an optional description')
@enduml
```

