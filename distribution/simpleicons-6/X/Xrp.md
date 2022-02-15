# Xrp


```text
simpleicons-6/X/Xrp
```

```text
include('simpleicons-6/X/Xrp')
```



| Illustration | Xrp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/X/Xrp.png) | ![illustration for Xrp](../../simpleicons-6/X/Xrp.Local.png) |




## Xrp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Xrp
include('simpleicons-6/X/Xrp')

' renders the element
Xrp('Xrp', 'Xrp', 'an optional tech label')
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

' loads the Item which embeds the element Xrp
include('simpleicons-6/X/Xrp')

' renders the element
Xrp('Xrp', 'Xrp', 'an optional tech label')
@enduml
```

