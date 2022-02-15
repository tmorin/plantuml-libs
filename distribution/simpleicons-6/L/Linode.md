# Linode


```text
simpleicons-6/L/Linode
```

```text
include('simpleicons-6/L/Linode')
```



| Illustration | Linode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Linode.png) | ![illustration for Linode](../../simpleicons-6/L/Linode.Local.png) |




## Linode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Linode
include('simpleicons-6/L/Linode')

' renders the element
Linode('Linode', 'Linode', 'an optional tech label')
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

' loads the Item which embeds the element Linode
include('simpleicons-6/L/Linode')

' renders the element
Linode('Linode', 'Linode', 'an optional tech label')
@enduml
```

