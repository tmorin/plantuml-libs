# Authy


```text
simpleicons-5/A/Authy
```

```text
include('simpleicons-5/A/Authy')
```



| Illustration | Authy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Authy.png) | ![illustration for Authy](../../simpleicons-5/A/Authy.Local.png) |




## Authy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Authy
include('simpleicons-5/A/Authy')

' renders the element
Authy('Authy', 'Authy', 'an optional tech label')
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

' loads the Item which embeds the element Authy
include('simpleicons-5/A/Authy')

' renders the element
Authy('Authy', 'Authy', 'an optional tech label')
@enduml
```

