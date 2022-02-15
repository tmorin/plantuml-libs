# Roamresearch


```text
simpleicons-6/R/Roamresearch
```

```text
include('simpleicons-6/R/Roamresearch')
```



| Illustration | Roamresearch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Roamresearch.png) | ![illustration for Roamresearch](../../simpleicons-6/R/Roamresearch.Local.png) |




## Roamresearch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Roamresearch
include('simpleicons-6/R/Roamresearch')

' renders the element
Roamresearch('Roamresearch', 'Roamresearch', 'an optional tech label')
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

' loads the Item which embeds the element Roamresearch
include('simpleicons-6/R/Roamresearch')

' renders the element
Roamresearch('Roamresearch', 'Roamresearch', 'an optional tech label')
@enduml
```

