# Backpack


```text
material-4/Places/Backpack
```

```text
include('material-4/Places/Backpack')
```



| Illustration | Backpack |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Backpack.png) | ![illustration for Backpack](../../material-4/Places/Backpack.Local.png) |




## Backpack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Backpack
include('material-4/Places/Backpack')

' renders the element
Backpack('Backpack', 'Backpack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Backpack
include('material-4/Places/Backpack')

' renders the element
Backpack('Backpack', 'Backpack', 'an optional tech label', 'an optional description')
@enduml
```

