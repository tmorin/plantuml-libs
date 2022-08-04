# Ray


```text
simpleicons-7/R/Ray
```

```text
include('simpleicons-7/R/Ray')
```



| Illustration | Ray |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Ray.png) | ![illustration for Ray](../../simpleicons-7/R/Ray.Local.png) |




## Ray

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ray
include('simpleicons-7/R/Ray')

' renders the element
Ray('Ray', 'Ray', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ray
include('simpleicons-7/R/Ray')

' renders the element
Ray('Ray', 'Ray', 'an optional tech label', 'an optional description')
@enduml
```

