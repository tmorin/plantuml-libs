# E


```text
simpleicons-7/E/E
```

```text
include('simpleicons-7/E/E')
```



| Illustration | E |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/E.png) | ![illustration for E](../../simpleicons-7/E/E.Local.png) |




## E

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element E
include('simpleicons-7/E/E')

' renders the element
E('E', 'E', 'an optional tech label')
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

' loads the Item which embeds the element E
include('simpleicons-7/E/E')

' renders the element
E('E', 'E', 'an optional tech label')
@enduml
```

