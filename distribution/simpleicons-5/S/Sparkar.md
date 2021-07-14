# Sparkar


```text
simpleicons-5/S/Sparkar
```

```text
include('simpleicons-5/S/Sparkar')
```



| Illustration | Sparkar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sparkar.png) | ![illustration for Sparkar](../../simpleicons-5/S/Sparkar.Local.png) |




## Sparkar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sparkar
include('simpleicons-5/S/Sparkar')

' renders the element
Sparkar('Sparkar', 'Sparkar', 'an optional tech label')
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

' loads the Item which embeds the element Sparkar
include('simpleicons-5/S/Sparkar')

' renders the element
Sparkar('Sparkar', 'Sparkar', 'an optional tech label')
@enduml
```

