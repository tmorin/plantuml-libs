# Mlflow


```text
simpleicons/M/Mlflow
```

```text
include('simpleicons/M/Mlflow')
```



| Illustration | Mlflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mlflow.png) | ![illustration for Mlflow](../../simpleicons/M/Mlflow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MlflowXs>`
- `<$MlflowSm>`
- `<$MlflowMd>`
- `<$MlflowLg>`





## Mlflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mlflow
include('simpleicons/M/Mlflow')

' renders the element
Mlflow('Mlflow', 'Mlflow', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mlflow
include('simpleicons/M/Mlflow')

' renders the element
Mlflow('Mlflow', 'Mlflow', 'an optional tech label', 'an optional description')
@enduml
```

