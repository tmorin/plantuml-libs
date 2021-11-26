# WaveSquare


```text
fontawesome-5/Solid/WaveSquare
```

```text
include('fontawesome-5/Solid/WaveSquare')
```



| Illustration | WaveSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/WaveSquare.png) | ![illustration for WaveSquare](../../fontawesome-5/Solid/WaveSquare.Local.png) |




## WaveSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WaveSquare
include('fontawesome-5/Solid/WaveSquare')

' renders the element
WaveSquare('WaveSquare', 'Wave Square', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WaveSquare
include('fontawesome-5/Solid/WaveSquare')

' renders the element
WaveSquare('WaveSquare', 'Wave Square', 'an optional tech label')
@enduml
```

