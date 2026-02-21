# Reactbootstrap


```text
simpleicons/R/Reactbootstrap
```

```text
include('simpleicons/R/Reactbootstrap')
```



| Illustration | Reactbootstrap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Reactbootstrap.png) | ![illustration for Reactbootstrap](../../simpleicons/R/Reactbootstrap.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReactbootstrapXs>`
- `<$ReactbootstrapSm>`
- `<$ReactbootstrapMd>`
- `<$ReactbootstrapLg>`





## Reactbootstrap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Reactbootstrap
include('simpleicons/R/Reactbootstrap')

' renders the element
Reactbootstrap('Reactbootstrap', 'Reactbootstrap', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reactbootstrap
include('simpleicons/R/Reactbootstrap')

' renders the element
Reactbootstrap('Reactbootstrap', 'Reactbootstrap', 'an optional tech label', 'an optional description')
@enduml
```

