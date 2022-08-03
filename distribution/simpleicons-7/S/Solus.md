# Solus


```text
simpleicons-7/S/Solus
```

```text
include('simpleicons-7/S/Solus')
```



| Illustration | Solus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Solus.png) | ![illustration for Solus](../../simpleicons-7/S/Solus.Local.png) |




## Solus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Solus
include('simpleicons-7/S/Solus')

' renders the element
Solus('Solus', 'Solus', 'an optional tech label')
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

' loads the Item which embeds the element Solus
include('simpleicons-7/S/Solus')

' renders the element
Solus('Solus', 'Solus', 'an optional tech label')
@enduml
```
