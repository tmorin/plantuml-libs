# Pdm


```text
simpleicons/P/Pdm
```

```text
include('simpleicons/P/Pdm')
```



| Illustration | Pdm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pdm.png) | ![illustration for Pdm](../../simpleicons/P/Pdm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PdmXs>`
- `<$PdmSm>`
- `<$PdmMd>`
- `<$PdmLg>`





## Pdm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pdm
include('simpleicons/P/Pdm')

' renders the element
Pdm('Pdm', 'Pdm', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pdm
include('simpleicons/P/Pdm')

' renders the element
Pdm('Pdm', 'Pdm', 'an optional tech label', 'an optional description')
@enduml
```

