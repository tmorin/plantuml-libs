# Globus


```text
simpleicons-8/G/Globus
```

```text
include('simpleicons-8/G/Globus')
```



| Illustration | Globus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Globus.png) | ![illustration for Globus](../../simpleicons-8/G/Globus.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Globus
include('simpleicons-8/G/Globus')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Globus
include('simpleicons-8/G/Globus')

' renders the element
Globus('Globus', 'Globus', 'an optional tech label', 'an optional description')
@enduml
```

