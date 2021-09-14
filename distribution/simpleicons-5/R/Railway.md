# Railway


```text
simpleicons-5/R/Railway
```

```text
include('simpleicons-5/R/Railway')
```



| Illustration | Railway |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Railway.png) | ![illustration for Railway](../../simpleicons-5/R/Railway.Local.png) |




## Railway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Railway
include('simpleicons-5/R/Railway')

' renders the element
Railway('Railway', 'Railway', 'an optional tech label')
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

' loads the Item which embeds the element Railway
include('simpleicons-5/R/Railway')

' renders the element
Railway('Railway', 'Railway', 'an optional tech label')
@enduml
```
