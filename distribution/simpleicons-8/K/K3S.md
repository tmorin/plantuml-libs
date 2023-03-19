# K3S


```text
simpleicons-8/K/K3S
```

```text
include('simpleicons-8/K/K3S')
```



| Illustration | K3S |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/K3S.png) | ![illustration for K3S](../../simpleicons-8/K/K3S.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$K3SXs>`
- `<$K3SSm>`
- `<$K3SMd>`
- `<$K3SLg>`





## K3S

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element K3S
include('simpleicons-8/K/K3S')

' renders the element
K3S('K3s', 'K3s', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element K3S
include('simpleicons-8/K/K3S')

' renders the element
K3S('K3s', 'K3s', 'an optional tech label', 'an optional description')
@enduml
```

