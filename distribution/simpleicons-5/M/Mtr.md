# Mtr


```text
simpleicons-5/M/Mtr
```

```text
include('simpleicons-5/M/Mtr')
```



| Illustration | Mtr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mtr.png) | ![illustration for Mtr](../../simpleicons-5/M/Mtr.Local.png) |




## Mtr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mtr
include('simpleicons-5/M/Mtr')

' renders the element
Mtr('Mtr', 'Mtr', 'an optional tech label')
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

' loads the Item which embeds the element Mtr
include('simpleicons-5/M/Mtr')

' renders the element
Mtr('Mtr', 'Mtr', 'an optional tech label')
@enduml
```

