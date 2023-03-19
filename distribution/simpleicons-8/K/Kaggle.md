# Kaggle


```text
simpleicons-8/K/Kaggle
```

```text
include('simpleicons-8/K/Kaggle')
```



| Illustration | Kaggle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Kaggle.png) | ![illustration for Kaggle](../../simpleicons-8/K/Kaggle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KaggleXs>`
- `<$KaggleSm>`
- `<$KaggleMd>`
- `<$KaggleLg>`





## Kaggle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kaggle
include('simpleicons-8/K/Kaggle')

' renders the element
Kaggle('Kaggle', 'Kaggle', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Kaggle
include('simpleicons-8/K/Kaggle')

' renders the element
Kaggle('Kaggle', 'Kaggle', 'an optional tech label', 'an optional description')
@enduml
```

