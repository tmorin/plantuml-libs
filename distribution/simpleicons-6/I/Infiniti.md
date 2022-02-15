# Infiniti


```text
simpleicons-6/I/Infiniti
```

```text
include('simpleicons-6/I/Infiniti')
```



| Illustration | Infiniti |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Infiniti.png) | ![illustration for Infiniti](../../simpleicons-6/I/Infiniti.Local.png) |




## Infiniti

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Infiniti
include('simpleicons-6/I/Infiniti')

' renders the element
Infiniti('Infiniti', 'Infiniti', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Infiniti
include('simpleicons-6/I/Infiniti')

' renders the element
Infiniti('Infiniti', 'Infiniti', 'an optional tech label')
@enduml
```

