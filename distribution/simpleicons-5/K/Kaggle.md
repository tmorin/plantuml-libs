# Kaggle


```text
simpleicons-5/K/Kaggle
```

```text
include('simpleicons-5/K/Kaggle')
```



| Illustration | Kaggle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kaggle.png) | ![illustration for Kaggle](../../simpleicons-5/K/Kaggle.Local.png) |




## Kaggle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kaggle
include('simpleicons-5/K/Kaggle')

' renders the element
Kaggle('Kaggle', 'Kaggle', 'an optional tech label')
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

' loads the Item which embeds the element Kaggle
include('simpleicons-5/K/Kaggle')

' renders the element
Kaggle('Kaggle', 'Kaggle', 'an optional tech label')
@enduml
```

