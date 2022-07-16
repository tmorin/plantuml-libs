# Peertube


```text
simpleicons-7/P/Peertube
```

```text
include('simpleicons-7/P/Peertube')
```



| Illustration | Peertube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Peertube.png) | ![illustration for Peertube](../../simpleicons-7/P/Peertube.Local.png) |




## Peertube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Peertube
include('simpleicons-7/P/Peertube')

' renders the element
Peertube('Peertube', 'Peertube', 'an optional tech label')
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

' loads the Item which embeds the element Peertube
include('simpleicons-7/P/Peertube')

' renders the element
Peertube('Peertube', 'Peertube', 'an optional tech label')
@enduml
```

