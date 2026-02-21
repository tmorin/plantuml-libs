# Hyperx


```text
simpleicons/H/Hyperx
```

```text
include('simpleicons/H/Hyperx')
```



| Illustration | Hyperx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hyperx.png) | ![illustration for Hyperx](../../simpleicons/H/Hyperx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HyperxXs>`
- `<$HyperxSm>`
- `<$HyperxMd>`
- `<$HyperxLg>`





## Hyperx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hyperx
include('simpleicons/H/Hyperx')

' renders the element
Hyperx('Hyperx', 'Hyperx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hyperx
include('simpleicons/H/Hyperx')

' renders the element
Hyperx('Hyperx', 'Hyperx', 'an optional tech label', 'an optional description')
@enduml
```

