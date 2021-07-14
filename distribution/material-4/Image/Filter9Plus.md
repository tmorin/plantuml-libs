# Filter9Plus


```text
material-4/Image/Filter9Plus
```

```text
include('material-4/Image/Filter9Plus')
```



| Illustration | Filter9Plus |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Filter9Plus.png) | ![illustration for Filter9Plus](../../material-4/Image/Filter9Plus.Local.png) |




## Filter9Plus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Filter9Plus
include('material-4/Image/Filter9Plus')

' renders the element
Filter9Plus('Filter9Plus', 'Filter9 Plus', 'an optional tech label')
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

' loads the Item which embeds the element Filter9Plus
include('material-4/Image/Filter9Plus')

' renders the element
Filter9Plus('Filter9Plus', 'Filter9 Plus', 'an optional tech label')
@enduml
```

