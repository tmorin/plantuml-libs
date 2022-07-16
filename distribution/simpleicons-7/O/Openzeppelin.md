# Openzeppelin


```text
simpleicons-7/O/Openzeppelin
```

```text
include('simpleicons-7/O/Openzeppelin')
```



| Illustration | Openzeppelin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Openzeppelin.png) | ![illustration for Openzeppelin](../../simpleicons-7/O/Openzeppelin.Local.png) |




## Openzeppelin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Openzeppelin
include('simpleicons-7/O/Openzeppelin')

' renders the element
Openzeppelin('Openzeppelin', 'Openzeppelin', 'an optional tech label')
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

' loads the Item which embeds the element Openzeppelin
include('simpleicons-7/O/Openzeppelin')

' renders the element
Openzeppelin('Openzeppelin', 'Openzeppelin', 'an optional tech label')
@enduml
```

