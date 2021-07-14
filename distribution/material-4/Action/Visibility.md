# Visibility


```text
material-4/Action/Visibility
```

```text
include('material-4/Action/Visibility')
```



| Illustration | Visibility |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Visibility.png) | ![illustration for Visibility](../../material-4/Action/Visibility.Local.png) |




## Visibility

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Visibility
include('material-4/Action/Visibility')

' renders the element
Visibility('Visibility', 'Visibility', 'an optional tech label')
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

' loads the Item which embeds the element Visibility
include('material-4/Action/Visibility')

' renders the element
Visibility('Visibility', 'Visibility', 'an optional tech label')
@enduml
```

