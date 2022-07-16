# Thespritersresource


```text
simpleicons-7/T/Thespritersresource
```

```text
include('simpleicons-7/T/Thespritersresource')
```



| Illustration | Thespritersresource |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Thespritersresource.png) | ![illustration for Thespritersresource](../../simpleicons-7/T/Thespritersresource.Local.png) |




## Thespritersresource

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Thespritersresource
include('simpleicons-7/T/Thespritersresource')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Thespritersresource
include('simpleicons-7/T/Thespritersresource')

' renders the element
Thespritersresource('Thespritersresource', 'Thespritersresource', 'an optional tech label')
@enduml
```

