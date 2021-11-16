# Springsecurity


```text
simpleicons-5/S/Springsecurity
```

```text
include('simpleicons-5/S/Springsecurity')
```



| Illustration | Springsecurity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Springsecurity.png) | ![illustration for Springsecurity](../../simpleicons-5/S/Springsecurity.Local.png) |




## Springsecurity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Springsecurity
include('simpleicons-5/S/Springsecurity')

' renders the element
Springsecurity('Springsecurity', 'Springsecurity', 'an optional tech label')
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

' loads the Item which embeds the element Springsecurity
include('simpleicons-5/S/Springsecurity')

' renders the element
Springsecurity('Springsecurity', 'Springsecurity', 'an optional tech label')
@enduml
```

