# Mic


```text
material/Av/Mic
```

```text
include('material/Av/Mic')
```



| Illustration | Mic |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/Mic.png) | ![illustration for Mic](../../material/Av/Mic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicXs>`
- `<$MicSm>`
- `<$MicMd>`
- `<$MicLg>`





## Mic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Mic
include('material/Av/Mic')

' renders the element
Mic('Mic', 'Mic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mic
include('material/Av/Mic')

' renders the element
Mic('Mic', 'Mic', 'an optional tech label', 'an optional description')
@enduml
```

