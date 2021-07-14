# Cloudbees


```text
simpleicons-5/C/Cloudbees
```

```text
include('simpleicons-5/C/Cloudbees')
```



| Illustration | Cloudbees |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cloudbees.png) | ![illustration for Cloudbees](../../simpleicons-5/C/Cloudbees.Local.png) |




## Cloudbees

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cloudbees
include('simpleicons-5/C/Cloudbees')

' renders the element
Cloudbees('Cloudbees', 'Cloudbees', 'an optional tech label')
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

' loads the Item which embeds the element Cloudbees
include('simpleicons-5/C/Cloudbees')

' renders the element
Cloudbees('Cloudbees', 'Cloudbees', 'an optional tech label')
@enduml
```

