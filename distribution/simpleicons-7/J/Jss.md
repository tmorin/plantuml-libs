# Jss


```text
simpleicons-7/J/Jss
```

```text
include('simpleicons-7/J/Jss')
```



| Illustration | Jss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/J/Jss.png) | ![illustration for Jss](../../simpleicons-7/J/Jss.Local.png) |




## Jss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Jss
include('simpleicons-7/J/Jss')

' renders the element
Jss('Jss', 'Jss', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Jss
include('simpleicons-7/J/Jss')

' renders the element
Jss('Jss', 'Jss', 'an optional tech label', 'an optional description')
@enduml
```

