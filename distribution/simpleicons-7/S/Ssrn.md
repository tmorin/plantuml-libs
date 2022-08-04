# Ssrn


```text
simpleicons-7/S/Ssrn
```

```text
include('simpleicons-7/S/Ssrn')
```



| Illustration | Ssrn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Ssrn.png) | ![illustration for Ssrn](../../simpleicons-7/S/Ssrn.Local.png) |




## Ssrn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ssrn
include('simpleicons-7/S/Ssrn')

' renders the element
Ssrn('Ssrn', 'Ssrn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ssrn
include('simpleicons-7/S/Ssrn')

' renders the element
Ssrn('Ssrn', 'Ssrn', 'an optional tech label', 'an optional description')
@enduml
```

