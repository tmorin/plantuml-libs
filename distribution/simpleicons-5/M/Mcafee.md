# Mcafee


```text
simpleicons-5/M/Mcafee
```

```text
include('simpleicons-5/M/Mcafee')
```



| Illustration | Mcafee |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mcafee.png) | ![illustration for Mcafee](../../simpleicons-5/M/Mcafee.Local.png) |




## Mcafee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mcafee
include('simpleicons-5/M/Mcafee')

' renders the element
Mcafee('Mcafee', 'Mcafee', 'an optional tech label')
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

' loads the Item which embeds the element Mcafee
include('simpleicons-5/M/Mcafee')

' renders the element
Mcafee('Mcafee', 'Mcafee', 'an optional tech label')
@enduml
```

