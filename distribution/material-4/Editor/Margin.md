# Margin


```text
material-4/Editor/Margin
```

```text
include('material-4/Editor/Margin')
```



| Illustration | Margin |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/Margin.png) | ![illustration for Margin](../../material-4/Editor/Margin.Local.png) |




## Margin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Margin
include('material-4/Editor/Margin')

' renders the element
Margin('Margin', 'Margin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Margin
include('material-4/Editor/Margin')

' renders the element
Margin('Margin', 'Margin', 'an optional tech label', 'an optional description')
@enduml
```

