# Improvmx


```text
simpleicons/I/Improvmx
```

```text
include('simpleicons/I/Improvmx')
```



| Illustration | Improvmx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Improvmx.png) | ![illustration for Improvmx](../../simpleicons/I/Improvmx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ImprovmxXs>`
- `<$ImprovmxSm>`
- `<$ImprovmxMd>`
- `<$ImprovmxLg>`





## Improvmx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Improvmx
include('simpleicons/I/Improvmx')

' renders the element
Improvmx('Improvmx', 'Improvmx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Improvmx
include('simpleicons/I/Improvmx')

' renders the element
Improvmx('Improvmx', 'Improvmx', 'an optional tech label', 'an optional description')
@enduml
```

