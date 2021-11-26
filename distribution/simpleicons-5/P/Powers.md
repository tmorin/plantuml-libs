# Powers


```text
simpleicons-5/P/Powers
```

```text
include('simpleicons-5/P/Powers')
```



| Illustration | Powers |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Powers.png) | ![illustration for Powers](../../simpleicons-5/P/Powers.Local.png) |




## Powers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Powers
include('simpleicons-5/P/Powers')

' renders the element
Powers('Powers', 'Powers', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Powers
include('simpleicons-5/P/Powers')

' renders the element
Powers('Powers', 'Powers', 'an optional tech label')
@enduml
```

