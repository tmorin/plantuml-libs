# Nutanix


```text
simpleicons-6/N/Nutanix
```

```text
include('simpleicons-6/N/Nutanix')
```



| Illustration | Nutanix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Nutanix.png) | ![illustration for Nutanix](../../simpleicons-6/N/Nutanix.Local.png) |




## Nutanix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nutanix
include('simpleicons-6/N/Nutanix')

' renders the element
Nutanix('Nutanix', 'Nutanix', 'an optional tech label')
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

' loads the Item which embeds the element Nutanix
include('simpleicons-6/N/Nutanix')

' renders the element
Nutanix('Nutanix', 'Nutanix', 'an optional tech label')
@enduml
```

