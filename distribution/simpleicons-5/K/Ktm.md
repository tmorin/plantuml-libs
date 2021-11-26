# Ktm


```text
simpleicons-5/K/Ktm
```

```text
include('simpleicons-5/K/Ktm')
```



| Illustration | Ktm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Ktm.png) | ![illustration for Ktm](../../simpleicons-5/K/Ktm.Local.png) |




## Ktm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ktm
include('simpleicons-5/K/Ktm')

' renders the element
Ktm('Ktm', 'Ktm', 'an optional tech label')
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

' loads the Item which embeds the element Ktm
include('simpleicons-5/K/Ktm')

' renders the element
Ktm('Ktm', 'Ktm', 'an optional tech label')
@enduml
```

