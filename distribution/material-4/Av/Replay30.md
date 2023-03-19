# Replay30


```text
material-4/Av/Replay30
```

```text
include('material-4/Av/Replay30')
```



| Illustration | Replay30 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Replay30.png) | ![illustration for Replay30](../../material-4/Av/Replay30.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Replay30Xs>`
- `<$Replay30Sm>`
- `<$Replay30Md>`
- `<$Replay30Lg>`





## Replay30

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Replay30
include('material-4/Av/Replay30')

' renders the element
Replay30('Replay30', 'Replay30', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Replay30
include('material-4/Av/Replay30')

' renders the element
Replay30('Replay30', 'Replay30', 'an optional tech label', 'an optional description')
@enduml
```

