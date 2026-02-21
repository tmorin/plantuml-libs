# Iris


```text
simpleicons/I/Iris
```

```text
include('simpleicons/I/Iris')
```



| Illustration | Iris |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Iris.png) | ![illustration for Iris](../../simpleicons/I/Iris.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IrisXs>`
- `<$IrisSm>`
- `<$IrisMd>`
- `<$IrisLg>`





## Iris

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Iris
include('simpleicons/I/Iris')

' renders the element
Iris('Iris', 'Iris', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Iris
include('simpleicons/I/Iris')

' renders the element
Iris('Iris', 'Iris', 'an optional tech label', 'an optional description')
@enduml
```

