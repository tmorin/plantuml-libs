# Ssrn


```text
simpleicons-6/S/Ssrn
```

```text
include('simpleicons-6/S/Ssrn')
```



| Illustration | Ssrn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Ssrn.png) | ![illustration for Ssrn](../../simpleicons-6/S/Ssrn.Local.png) |




## Ssrn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ssrn
include('simpleicons-6/S/Ssrn')

' renders the element
Ssrn('Ssrn', 'Ssrn', 'an optional tech label')
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

' loads the Item which embeds the element Ssrn
include('simpleicons-6/S/Ssrn')

' renders the element
Ssrn('Ssrn', 'Ssrn', 'an optional tech label')
@enduml
```

