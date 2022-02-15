# Cloudbees


```text
simpleicons-6/C/Cloudbees
```

```text
include('simpleicons-6/C/Cloudbees')
```



| Illustration | Cloudbees |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cloudbees.png) | ![illustration for Cloudbees](../../simpleicons-6/C/Cloudbees.Local.png) |




## Cloudbees

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cloudbees
include('simpleicons-6/C/Cloudbees')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cloudbees
include('simpleicons-6/C/Cloudbees')

' renders the element
Cloudbees('Cloudbees', 'Cloudbees', 'an optional tech label')
@enduml
```

