# G2G


```text
simpleicons-14/G/G2G
```

```text
include('simpleicons-14/G/G2G')
```



| Illustration | G2G |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/G2G.png) | ![illustration for G2G](../../simpleicons-14/G/G2G.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$G2GXs>`
- `<$G2GSm>`
- `<$G2GMd>`
- `<$G2GLg>`





## G2G

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element G2G
include('simpleicons-14/G/G2G')

' renders the element
G2G('G2g', 'G2g', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element G2G
include('simpleicons-14/G/G2G')

' renders the element
G2G('G2g', 'G2g', 'an optional tech label', 'an optional description')
@enduml
```

