# Traefikproxy


```text
simpleicons-7/T/Traefikproxy
```

```text
include('simpleicons-7/T/Traefikproxy')
```



| Illustration | Traefikproxy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Traefikproxy.png) | ![illustration for Traefikproxy](../../simpleicons-7/T/Traefikproxy.Local.png) |




## Traefikproxy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Traefikproxy
include('simpleicons-7/T/Traefikproxy')

' renders the element
Traefikproxy('Traefikproxy', 'Traefikproxy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Traefikproxy
include('simpleicons-7/T/Traefikproxy')

' renders the element
Traefikproxy('Traefikproxy', 'Traefikproxy', 'an optional tech label', 'an optional description')
@enduml
```

