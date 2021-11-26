# Solus


```text
simpleicons-5/S/Solus
```

```text
include('simpleicons-5/S/Solus')
```



| Illustration | Solus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Solus.png) | ![illustration for Solus](../../simpleicons-5/S/Solus.Local.png) |




## Solus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Solus
include('simpleicons-5/S/Solus')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Solus
include('simpleicons-5/S/Solus')

' renders the element
Solus('Solus', 'Solus', 'an optional tech label')
@enduml
```

