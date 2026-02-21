# Openstack


```text
simpleicons/O/Openstack
```

```text
include('simpleicons/O/Openstack')
```



| Illustration | Openstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Openstack.png) | ![illustration for Openstack](../../simpleicons/O/Openstack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenstackXs>`
- `<$OpenstackSm>`
- `<$OpenstackMd>`
- `<$OpenstackLg>`





## Openstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openstack
include('simpleicons/O/Openstack')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openstack
include('simpleicons/O/Openstack')

' renders the element
Openstack('Openstack', 'Openstack', 'an optional tech label', 'an optional description')
@enduml
```

