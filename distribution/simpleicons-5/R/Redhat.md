# Redhat


```text
simpleicons-5/R/Redhat
```

```text
include('simpleicons-5/R/Redhat')
```



| Illustration | Redhat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Redhat.png) | ![illustration for Redhat](../../simpleicons-5/R/Redhat.Local.png) |




## Redhat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Redhat
include('simpleicons-5/R/Redhat')

' renders the element
Redhat('Redhat', 'Redhat', 'an optional tech label')
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

' loads the Item which embeds the element Redhat
include('simpleicons-5/R/Redhat')

' renders the element
Redhat('Redhat', 'Redhat', 'an optional tech label')
@enduml
```

