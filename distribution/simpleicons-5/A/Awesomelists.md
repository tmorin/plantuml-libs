# Awesomelists


```text
simpleicons-5/A/Awesomelists
```

```text
include('simpleicons-5/A/Awesomelists')
```



| Illustration | Awesomelists |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Awesomelists.png) | ![illustration for Awesomelists](../../simpleicons-5/A/Awesomelists.Local.png) |




## Awesomelists

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Awesomelists
include('simpleicons-5/A/Awesomelists')

' renders the element
Awesomelists('Awesomelists', 'Awesomelists', 'an optional tech label')
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

' loads the Item which embeds the element Awesomelists
include('simpleicons-5/A/Awesomelists')

' renders the element
Awesomelists('Awesomelists', 'Awesomelists', 'an optional tech label')
@enduml
```

