# G2A


```text
simpleicons-6/G/G2A
```

```text
include('simpleicons-6/G/G2A')
```



| Illustration | G2A |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/G2A.png) | ![illustration for G2A](../../simpleicons-6/G/G2A.Local.png) |




## G2A

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element G2A
include('simpleicons-6/G/G2A')

' renders the element
G2A('G2a', 'G2a', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element G2A
include('simpleicons-6/G/G2A')

' renders the element
G2A('G2a', 'G2a', 'an optional tech label')
@enduml
```

