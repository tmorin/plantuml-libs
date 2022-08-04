# Serverfault


```text
simpleicons-7/S/Serverfault
```

```text
include('simpleicons-7/S/Serverfault')
```



| Illustration | Serverfault |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Serverfault.png) | ![illustration for Serverfault](../../simpleicons-7/S/Serverfault.Local.png) |




## Serverfault

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Serverfault
include('simpleicons-7/S/Serverfault')

' renders the element
Serverfault('Serverfault', 'Serverfault', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Serverfault
include('simpleicons-7/S/Serverfault')

' renders the element
Serverfault('Serverfault', 'Serverfault', 'an optional tech label', 'an optional description')
@enduml
```

