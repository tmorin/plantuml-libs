# Openstack


```text
simpleicons-8/O/Openstack
```

```text
include('simpleicons-8/O/Openstack')
```



| Illustration | Openstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Openstack.png) | ![illustration for Openstack](../../simpleicons-8/O/Openstack.Local.png) |




## Openstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Openstack
include('simpleicons-8/O/Openstack')

' renders the element
Openstack('Openstack', 'Openstack', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Openstack
include('simpleicons-8/O/Openstack')

' renders the element
Openstack('Openstack', 'Openstack', 'an optional tech label', 'an optional description')
@enduml
```

