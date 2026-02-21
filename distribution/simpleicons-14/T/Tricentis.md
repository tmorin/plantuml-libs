# Tricentis


```text
simpleicons-14/T/Tricentis
```

```text
include('simpleicons-14/T/Tricentis')
```



| Illustration | Tricentis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tricentis.png) | ![illustration for Tricentis](../../simpleicons-14/T/Tricentis.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TricentisXs>`
- `<$TricentisSm>`
- `<$TricentisMd>`
- `<$TricentisLg>`





## Tricentis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tricentis
include('simpleicons-14/T/Tricentis')

' renders the element
Tricentis('Tricentis', 'Tricentis', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tricentis
include('simpleicons-14/T/Tricentis')

' renders the element
Tricentis('Tricentis', 'Tricentis', 'an optional tech label', 'an optional description')
@enduml
```

