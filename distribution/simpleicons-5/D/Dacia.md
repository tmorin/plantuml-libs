# Dacia


```text
simpleicons-5/D/Dacia
```

```text
include('simpleicons-5/D/Dacia')
```



| Illustration | Dacia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dacia.png) | ![illustration for Dacia](../../simpleicons-5/D/Dacia.Local.png) |




## Dacia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dacia
include('simpleicons-5/D/Dacia')

' renders the element
Dacia('Dacia', 'Dacia', 'an optional tech label')
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

' loads the Item which embeds the element Dacia
include('simpleicons-5/D/Dacia')

' renders the element
Dacia('Dacia', 'Dacia', 'an optional tech label')
@enduml
```

