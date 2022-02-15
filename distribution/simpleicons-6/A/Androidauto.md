# Androidauto


```text
simpleicons-6/A/Androidauto
```

```text
include('simpleicons-6/A/Androidauto')
```



| Illustration | Androidauto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Androidauto.png) | ![illustration for Androidauto](../../simpleicons-6/A/Androidauto.Local.png) |




## Androidauto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Androidauto
include('simpleicons-6/A/Androidauto')

' renders the element
Androidauto('Androidauto', 'Androidauto', 'an optional tech label')
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

' loads the Item which embeds the element Androidauto
include('simpleicons-6/A/Androidauto')

' renders the element
Androidauto('Androidauto', 'Androidauto', 'an optional tech label')
@enduml
```

