# Myspace


```text
simpleicons-5/M/Myspace
```

```text
include('simpleicons-5/M/Myspace')
```



| Illustration | Myspace |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Myspace.png) | ![illustration for Myspace](../../simpleicons-5/M/Myspace.Local.png) |




## Myspace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Myspace
include('simpleicons-5/M/Myspace')

' renders the element
Myspace('Myspace', 'Myspace', 'an optional tech label')
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

' loads the Item which embeds the element Myspace
include('simpleicons-5/M/Myspace')

' renders the element
Myspace('Myspace', 'Myspace', 'an optional tech label')
@enduml
```

