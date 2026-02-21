# Microwave


```text
material/Places/Microwave
```

```text
include('material/Places/Microwave')
```



| Illustration | Microwave |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/Microwave.png) | ![illustration for Microwave](../../material/Places/Microwave.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicrowaveXs>`
- `<$MicrowaveSm>`
- `<$MicrowaveMd>`
- `<$MicrowaveLg>`





## Microwave

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Microwave
include('material/Places/Microwave')

' renders the element
Microwave('Microwave', 'Microwave', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Microwave
include('material/Places/Microwave')

' renders the element
Microwave('Microwave', 'Microwave', 'an optional tech label', 'an optional description')
@enduml
```

