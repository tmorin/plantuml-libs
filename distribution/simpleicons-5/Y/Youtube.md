# Youtube


```text
simpleicons-5/Y/Youtube
```

```text
include('simpleicons-5/Y/Youtube')
```



| Illustration | Youtube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Y/Youtube.png) | ![illustration for Youtube](../../simpleicons-5/Y/Youtube.Local.png) |




## Youtube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Youtube
include('simpleicons-5/Y/Youtube')

' renders the element
Youtube('Youtube', 'Youtube', 'an optional tech label')
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

' loads the Item which embeds the element Youtube
include('simpleicons-5/Y/Youtube')

' renders the element
Youtube('Youtube', 'Youtube', 'an optional tech label')
@enduml
```

