# Etcd


```text
simpleicons-7/E/Etcd
```

```text
include('simpleicons-7/E/Etcd')
```



| Illustration | Etcd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Etcd.png) | ![illustration for Etcd](../../simpleicons-7/E/Etcd.Local.png) |




## Etcd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Etcd
include('simpleicons-7/E/Etcd')

' renders the element
Etcd('Etcd', 'Etcd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Etcd
include('simpleicons-7/E/Etcd')

' renders the element
Etcd('Etcd', 'Etcd', 'an optional tech label', 'an optional description')
@enduml
```

