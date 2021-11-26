# Shuffle


```text
material-4/Av/Shuffle
```

```text
include('material-4/Av/Shuffle')
```



| Illustration | Shuffle |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Shuffle.png) | ![illustration for Shuffle](../../material-4/Av/Shuffle.Local.png) |




## Shuffle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Shuffle
include('material-4/Av/Shuffle')

' renders the element
Shuffle('Shuffle', 'Shuffle', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Shuffle
include('material-4/Av/Shuffle')

' renders the element
Shuffle('Shuffle', 'Shuffle', 'an optional tech label')
@enduml
```

