# Rancher


```text
simpleicons-5/R/Rancher
```

```text
include('simpleicons-5/R/Rancher')
```



| Illustration | Rancher |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Rancher.png) | ![illustration for Rancher](../../simpleicons-5/R/Rancher.Local.png) |




## Rancher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Rancher
include('simpleicons-5/R/Rancher')

' renders the element
Rancher('Rancher', 'Rancher', 'an optional tech label')
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

' loads the Item which embeds the element Rancher
include('simpleicons-5/R/Rancher')

' renders the element
Rancher('Rancher', 'Rancher', 'an optional tech label')
@enduml
```

