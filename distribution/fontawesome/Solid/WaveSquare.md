# WaveSquare


```text
fontawesome/Solid/WaveSquare
```

```text
include('fontawesome/Solid/WaveSquare')
```



| Illustration | WaveSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WaveSquare.png) | ![illustration for WaveSquare](../../fontawesome/Solid/WaveSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WaveSquareXs>`
- `<$WaveSquareSm>`
- `<$WaveSquareMd>`
- `<$WaveSquareLg>`





## WaveSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WaveSquare
include('fontawesome/Solid/WaveSquare')

' renders the element
WaveSquare('WaveSquare', 'Wave Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WaveSquare
include('fontawesome/Solid/WaveSquare')

' renders the element
WaveSquare('WaveSquare', 'Wave Square', 'an optional tech label', 'an optional description')
@enduml
```

