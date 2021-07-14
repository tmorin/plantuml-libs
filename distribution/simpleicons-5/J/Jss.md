# Jss


```text
simpleicons-5/J/Jss
```

```text
include('simpleicons-5/J/Jss')
```



| Illustration | Jss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jss.png) | ![illustration for Jss](../../simpleicons-5/J/Jss.Local.png) |




## Jss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jss
include('simpleicons-5/J/Jss')

' renders the element
Jss('Jss', 'Jss', 'an optional tech label')
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

' loads the Item which embeds the element Jss
include('simpleicons-5/J/Jss')

' renders the element
Jss('Jss', 'Jss', 'an optional tech label')
@enduml
```

