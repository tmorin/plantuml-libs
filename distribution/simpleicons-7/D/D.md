# D


```text
simpleicons-7/D/D
```

```text
include('simpleicons-7/D/D')
```



| Illustration | D |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/D.png) | ![illustration for D](../../simpleicons-7/D/D.Local.png) |




## D

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element D
include('simpleicons-7/D/D')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element D
include('simpleicons-7/D/D')

' renders the element
D('D', 'D', 'an optional tech label', 'an optional description')
@enduml
```

