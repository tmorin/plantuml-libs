# Dvc


```text
simpleicons-6/D/Dvc
```

```text
include('simpleicons-6/D/Dvc')
```



| Illustration | Dvc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Dvc.png) | ![illustration for Dvc](../../simpleicons-6/D/Dvc.Local.png) |




## Dvc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Dvc
include('simpleicons-6/D/Dvc')

' renders the element
Dvc('Dvc', 'Dvc', 'an optional tech label')
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

' loads the Item which embeds the element Dvc
include('simpleicons-6/D/Dvc')

' renders the element
Dvc('Dvc', 'Dvc', 'an optional tech label')
@enduml
```

