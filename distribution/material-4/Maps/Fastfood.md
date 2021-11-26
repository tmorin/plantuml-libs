# Fastfood


```text
material-4/Maps/Fastfood
```

```text
include('material-4/Maps/Fastfood')
```



| Illustration | Fastfood |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Fastfood.png) | ![illustration for Fastfood](../../material-4/Maps/Fastfood.Local.png) |




## Fastfood

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Fastfood
include('material-4/Maps/Fastfood')

' renders the element
Fastfood('Fastfood', 'Fastfood', 'an optional tech label')
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

' loads the Item which embeds the element Fastfood
include('material-4/Maps/Fastfood')

' renders the element
Fastfood('Fastfood', 'Fastfood', 'an optional tech label')
@enduml
```

