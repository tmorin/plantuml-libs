# Cloudera


```text
simpleicons-5/C/Cloudera
```

```text
include('simpleicons-5/C/Cloudera')
```



| Illustration | Cloudera |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cloudera.png) | ![illustration for Cloudera](../../simpleicons-5/C/Cloudera.Local.png) |




## Cloudera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cloudera
include('simpleicons-5/C/Cloudera')

' renders the element
Cloudera('Cloudera', 'Cloudera', 'an optional tech label')
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

' loads the Item which embeds the element Cloudera
include('simpleicons-5/C/Cloudera')

' renders the element
Cloudera('Cloudera', 'Cloudera', 'an optional tech label')
@enduml
```

