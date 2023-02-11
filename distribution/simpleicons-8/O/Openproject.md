# Openproject


```text
simpleicons-8/O/Openproject
```

```text
include('simpleicons-8/O/Openproject')
```



| Illustration | Openproject |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Openproject.png) | ![illustration for Openproject](../../simpleicons-8/O/Openproject.Local.png) |




## Openproject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Openproject
include('simpleicons-8/O/Openproject')

' renders the element
Openproject('Openproject', 'Openproject', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openproject
include('simpleicons-8/O/Openproject')

' renders the element
Openproject('Openproject', 'Openproject', 'an optional tech label', 'an optional description')
@enduml
```

