# D


```text
simpleicons-14/D/D
```

```text
include('simpleicons-14/D/D')
```



| Illustration | D |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/D.png) | ![illustration for D](../../simpleicons-14/D/D.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DXs>`
- `<$DSm>`
- `<$DMd>`
- `<$DLg>`





## D

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element D
include('simpleicons-14/D/D')

' renders the element
D('D', 'D', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element D
include('simpleicons-14/D/D')

' renders the element
D('D', 'D', 'an optional tech label', 'an optional description')
@enduml
```

