# Vmware


```text
simpleicons-6/V/Vmware
```

```text
include('simpleicons-6/V/Vmware')
```



| Illustration | Vmware |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Vmware.png) | ![illustration for Vmware](../../simpleicons-6/V/Vmware.Local.png) |




## Vmware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vmware
include('simpleicons-6/V/Vmware')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vmware
include('simpleicons-6/V/Vmware')

' renders the element
Vmware('Vmware', 'Vmware', 'an optional tech label')
@enduml
```

