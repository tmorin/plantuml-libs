# Unpublished


```text
material-4/Action/Unpublished
```

```text
include('material-4/Action/Unpublished')
```



| Illustration | Unpublished |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Unpublished.png) | ![illustration for Unpublished](../../material-4/Action/Unpublished.Local.png) |




## Unpublished

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Unpublished
include('material-4/Action/Unpublished')

' renders the element
Unpublished('Unpublished', 'Unpublished', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Unpublished
include('material-4/Action/Unpublished')

' renders the element
Unpublished('Unpublished', 'Unpublished', 'an optional tech label', 'an optional description')
@enduml
```

