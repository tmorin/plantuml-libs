# Bootstrap


```text
simpleicons-5/B/Bootstrap
```

```text
include('simpleicons-5/B/Bootstrap')
```



| Illustration | Bootstrap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bootstrap.png) | ![illustration for Bootstrap](../../simpleicons-5/B/Bootstrap.Local.png) |




## Bootstrap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bootstrap
include('simpleicons-5/B/Bootstrap')

' renders the element
Bootstrap('Bootstrap', 'Bootstrap', 'an optional tech label')
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

' loads the Item which embeds the element Bootstrap
include('simpleicons-5/B/Bootstrap')

' renders the element
Bootstrap('Bootstrap', 'Bootstrap', 'an optional tech label')
@enduml
```

