# Scikitlearn


```text
simpleicons-5/S/Scikitlearn
```

```text
include('simpleicons-5/S/Scikitlearn')
```



| Illustration | Scikitlearn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Scikitlearn.png) | ![illustration for Scikitlearn](../../simpleicons-5/S/Scikitlearn.Local.png) |




## Scikitlearn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Scikitlearn
include('simpleicons-5/S/Scikitlearn')

' renders the element
Scikitlearn('Scikitlearn', 'Scikitlearn', 'an optional tech label')
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

' loads the Item which embeds the element Scikitlearn
include('simpleicons-5/S/Scikitlearn')

' renders the element
Scikitlearn('Scikitlearn', 'Scikitlearn', 'an optional tech label')
@enduml
```

