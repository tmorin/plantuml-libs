# Visualparadigm


```text
simpleicons/V/Visualparadigm
```

```text
include('simpleicons/V/Visualparadigm')
```



| Illustration | Visualparadigm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Visualparadigm.png) | ![illustration for Visualparadigm](../../simpleicons/V/Visualparadigm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VisualparadigmXs>`
- `<$VisualparadigmSm>`
- `<$VisualparadigmMd>`
- `<$VisualparadigmLg>`





## Visualparadigm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Visualparadigm
include('simpleicons/V/Visualparadigm')

' renders the element
Visualparadigm('Visualparadigm', 'Visualparadigm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Visualparadigm
include('simpleicons/V/Visualparadigm')

' renders the element
Visualparadigm('Visualparadigm', 'Visualparadigm', 'an optional tech label', 'an optional description')
@enduml
```

