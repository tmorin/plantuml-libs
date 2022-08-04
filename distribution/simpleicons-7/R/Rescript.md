# Rescript


```text
simpleicons-7/R/Rescript
```

```text
include('simpleicons-7/R/Rescript')
```



| Illustration | Rescript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Rescript.png) | ![illustration for Rescript](../../simpleicons-7/R/Rescript.Local.png) |




## Rescript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rescript
include('simpleicons-7/R/Rescript')

' renders the element
Rescript('Rescript', 'Rescript', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rescript
include('simpleicons-7/R/Rescript')

' renders the element
Rescript('Rescript', 'Rescript', 'an optional tech label', 'an optional description')
@enduml
```

