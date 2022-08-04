# Roamresearch


```text
simpleicons-7/R/Roamresearch
```

```text
include('simpleicons-7/R/Roamresearch')
```



| Illustration | Roamresearch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Roamresearch.png) | ![illustration for Roamresearch](../../simpleicons-7/R/Roamresearch.Local.png) |




## Roamresearch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Roamresearch
include('simpleicons-7/R/Roamresearch')

' renders the element
Roamresearch('Roamresearch', 'Roamresearch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Roamresearch
include('simpleicons-7/R/Roamresearch')

' renders the element
Roamresearch('Roamresearch', 'Roamresearch', 'an optional tech label', 'an optional description')
@enduml
```

