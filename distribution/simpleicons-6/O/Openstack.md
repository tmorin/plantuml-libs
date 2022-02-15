# Openstack


```text
simpleicons-6/O/Openstack
```

```text
include('simpleicons-6/O/Openstack')
```



| Illustration | Openstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Openstack.png) | ![illustration for Openstack](../../simpleicons-6/O/Openstack.Local.png) |




## Openstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Openstack
include('simpleicons-6/O/Openstack')

' renders the element
Openstack('Openstack', 'Openstack', 'an optional tech label')
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

' loads the Item which embeds the element Openstack
include('simpleicons-6/O/Openstack')

' renders the element
Openstack('Openstack', 'Openstack', 'an optional tech label')
@enduml
```

