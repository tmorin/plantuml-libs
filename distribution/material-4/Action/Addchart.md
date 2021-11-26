# Addchart


```text
material-4/Action/Addchart
```

```text
include('material-4/Action/Addchart')
```



| Illustration | Addchart |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Addchart.png) | ![illustration for Addchart](../../material-4/Action/Addchart.Local.png) |




## Addchart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Addchart
include('material-4/Action/Addchart')

' renders the element
Addchart('Addchart', 'Addchart', 'an optional tech label')
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

' loads the Item which embeds the element Addchart
include('material-4/Action/Addchart')

' renders the element
Addchart('Addchart', 'Addchart', 'an optional tech label')
@enduml
```

