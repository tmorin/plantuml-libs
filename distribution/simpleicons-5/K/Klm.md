# Klm


```text
simpleicons-5/K/Klm
```

```text
include('simpleicons-5/K/Klm')
```



| Illustration | Klm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Klm.png) | ![illustration for Klm](../../simpleicons-5/K/Klm.Local.png) |




## Klm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Klm
include('simpleicons-5/K/Klm')

' renders the element
Klm('Klm', 'Klm', 'an optional tech label')
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

' loads the Item which embeds the element Klm
include('simpleicons-5/K/Klm')

' renders the element
Klm('Klm', 'Klm', 'an optional tech label')
@enduml
```

