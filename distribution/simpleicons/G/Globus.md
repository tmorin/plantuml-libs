# Globus


```text
simpleicons/G/Globus
```

```text
include('simpleicons/G/Globus')
```



| Illustration | Globus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Globus.png) | ![illustration for Globus](../../simpleicons/G/Globus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlobusXs>`
- `<$GlobusSm>`
- `<$GlobusMd>`
- `<$GlobusLg>`





## Globus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Globus
include('simpleicons/G/Globus')

' renders the element
Globus('Globus', 'Globus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Globus
include('simpleicons/G/Globus')

' renders the element
Globus('Globus', 'Globus', 'an optional tech label', 'an optional description')
@enduml
```

