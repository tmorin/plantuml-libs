# Mcafee


```text
simpleicons-8/M/Mcafee
```

```text
include('simpleicons-8/M/Mcafee')
```



| Illustration | Mcafee |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Mcafee.png) | ![illustration for Mcafee](../../simpleicons-8/M/Mcafee.Local.png) |




## Mcafee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Mcafee
include('simpleicons-8/M/Mcafee')

' renders the element
Mcafee('Mcafee', 'Mcafee', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Mcafee
include('simpleicons-8/M/Mcafee')

' renders the element
Mcafee('Mcafee', 'Mcafee', 'an optional tech label', 'an optional description')
@enduml
```

