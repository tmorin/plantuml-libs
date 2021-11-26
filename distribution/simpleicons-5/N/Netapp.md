# Netapp


```text
simpleicons-5/N/Netapp
```

```text
include('simpleicons-5/N/Netapp')
```



| Illustration | Netapp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Netapp.png) | ![illustration for Netapp](../../simpleicons-5/N/Netapp.Local.png) |




## Netapp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Netapp
include('simpleicons-5/N/Netapp')

' renders the element
Netapp('Netapp', 'Netapp', 'an optional tech label')
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

' loads the Item which embeds the element Netapp
include('simpleicons-5/N/Netapp')

' renders the element
Netapp('Netapp', 'Netapp', 'an optional tech label')
@enduml
```

