# Serverfault


```text
simpleicons-6/S/Serverfault
```

```text
include('simpleicons-6/S/Serverfault')
```



| Illustration | Serverfault |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Serverfault.png) | ![illustration for Serverfault](../../simpleicons-6/S/Serverfault.Local.png) |




## Serverfault

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Serverfault
include('simpleicons-6/S/Serverfault')

' renders the element
Serverfault('Serverfault', 'Serverfault', 'an optional tech label')
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

' loads the Item which embeds the element Serverfault
include('simpleicons-6/S/Serverfault')

' renders the element
Serverfault('Serverfault', 'Serverfault', 'an optional tech label')
@enduml
```

