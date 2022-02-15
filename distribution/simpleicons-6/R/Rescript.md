# Rescript


```text
simpleicons-6/R/Rescript
```

```text
include('simpleicons-6/R/Rescript')
```



| Illustration | Rescript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Rescript.png) | ![illustration for Rescript](../../simpleicons-6/R/Rescript.Local.png) |




## Rescript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rescript
include('simpleicons-6/R/Rescript')

' renders the element
Rescript('Rescript', 'Rescript', 'an optional tech label')
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

' loads the Item which embeds the element Rescript
include('simpleicons-6/R/Rescript')

' renders the element
Rescript('Rescript', 'Rescript', 'an optional tech label')
@enduml
```

