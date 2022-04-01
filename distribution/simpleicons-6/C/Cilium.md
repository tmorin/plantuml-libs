# Cilium


```text
simpleicons-6/C/Cilium
```

```text
include('simpleicons-6/C/Cilium')
```



| Illustration | Cilium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cilium.png) | ![illustration for Cilium](../../simpleicons-6/C/Cilium.Local.png) |




## Cilium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cilium
include('simpleicons-6/C/Cilium')

' renders the element
Cilium('Cilium', 'Cilium', 'an optional tech label')
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

' loads the Item which embeds the element Cilium
include('simpleicons-6/C/Cilium')

' renders the element
Cilium('Cilium', 'Cilium', 'an optional tech label')
@enduml
```

