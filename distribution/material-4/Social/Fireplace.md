# Fireplace


```text
material-4/Social/Fireplace
```

```text
include('material-4/Social/Fireplace')
```



| Illustration | Fireplace |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Fireplace.png) | ![illustration for Fireplace](../../material-4/Social/Fireplace.Local.png) |




## Fireplace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Fireplace
include('material-4/Social/Fireplace')

' renders the element
Fireplace('Fireplace', 'Fireplace', 'an optional tech label')
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

' loads the Item which embeds the element Fireplace
include('material-4/Social/Fireplace')

' renders the element
Fireplace('Fireplace', 'Fireplace', 'an optional tech label')
@enduml
```

