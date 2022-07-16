# Mlflow


```text
simpleicons-7/M/Mlflow
```

```text
include('simpleicons-7/M/Mlflow')
```



| Illustration | Mlflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Mlflow.png) | ![illustration for Mlflow](../../simpleicons-7/M/Mlflow.Local.png) |




## Mlflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mlflow
include('simpleicons-7/M/Mlflow')

' renders the element
Mlflow('Mlflow', 'Mlflow', 'an optional tech label')
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

' loads the Item which embeds the element Mlflow
include('simpleicons-7/M/Mlflow')

' renders the element
Mlflow('Mlflow', 'Mlflow', 'an optional tech label')
@enduml
```

