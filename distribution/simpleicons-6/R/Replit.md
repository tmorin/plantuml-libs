# Replit


```text
simpleicons-6/R/Replit
```

```text
include('simpleicons-6/R/Replit')
```



| Illustration | Replit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Replit.png) | ![illustration for Replit](../../simpleicons-6/R/Replit.Local.png) |




## Replit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Replit
include('simpleicons-6/R/Replit')

' renders the element
Replit('Replit', 'Replit', 'an optional tech label')
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

' loads the Item which embeds the element Replit
include('simpleicons-6/R/Replit')

' renders the element
Replit('Replit', 'Replit', 'an optional tech label')
@enduml
```

