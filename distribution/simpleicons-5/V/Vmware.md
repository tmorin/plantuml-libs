# Vmware


```text
simpleicons-5/V/Vmware
```

```text
include('simpleicons-5/V/Vmware')
```



| Illustration | Vmware |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Vmware.png) | ![illustration for Vmware](../../simpleicons-5/V/Vmware.Local.png) |




## Vmware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Vmware
include('simpleicons-5/V/Vmware')

' renders the element
Vmware('Vmware', 'Vmware', 'an optional tech label')
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

' loads the Item which embeds the element Vmware
include('simpleicons-5/V/Vmware')

' renders the element
Vmware('Vmware', 'Vmware', 'an optional tech label')
@enduml
```

