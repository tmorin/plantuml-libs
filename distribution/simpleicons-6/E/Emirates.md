# Emirates


```text
simpleicons-6/E/Emirates
```

```text
include('simpleicons-6/E/Emirates')
```



| Illustration | Emirates |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Emirates.png) | ![illustration for Emirates](../../simpleicons-6/E/Emirates.Local.png) |




## Emirates

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Emirates
include('simpleicons-6/E/Emirates')

' renders the element
Emirates('Emirates', 'Emirates', 'an optional tech label')
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

' loads the Item which embeds the element Emirates
include('simpleicons-6/E/Emirates')

' renders the element
Emirates('Emirates', 'Emirates', 'an optional tech label')
@enduml
```

