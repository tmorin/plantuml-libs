# Thespritersresource


```text
simpleicons-5/T/Thespritersresource
```

```text
include('simpleicons-5/T/Thespritersresource')
```



| Illustration | Thespritersresource |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Thespritersresource.png) | ![illustration for Thespritersresource](../../simpleicons-5/T/Thespritersresource.Local.png) |




## Thespritersresource

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Thespritersresource
include('simpleicons-5/T/Thespritersresource')

' renders the element
Thespritersresource('Thespritersresource', 'Thespritersresource', 'an optional tech label')
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

' loads the Item which embeds the element Thespritersresource
include('simpleicons-5/T/Thespritersresource')

' renders the element
Thespritersresource('Thespritersresource', 'Thespritersresource', 'an optional tech label')
@enduml
```

