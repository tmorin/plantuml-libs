# Invision


```text
simpleicons-7/I/Invision
```

```text
include('simpleicons-7/I/Invision')
```



| Illustration | Invision |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Invision.png) | ![illustration for Invision](../../simpleicons-7/I/Invision.Local.png) |




## Invision

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Invision
include('simpleicons-7/I/Invision')

' renders the element
Invision('Invision', 'Invision', 'an optional tech label')
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

' loads the Item which embeds the element Invision
include('simpleicons-7/I/Invision')

' renders the element
Invision('Invision', 'Invision', 'an optional tech label')
@enduml
```

