# Compare


```text
material-4/Image/Compare
```

```text
include('material-4/Image/Compare')
```



| Illustration | Compare |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Compare.png) | ![illustration for Compare](../../material-4/Image/Compare.Local.png) |




## Compare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Compare
include('material-4/Image/Compare')

' renders the element
Compare('Compare', 'Compare', 'an optional tech label')
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

' loads the Item which embeds the element Compare
include('material-4/Image/Compare')

' renders the element
Compare('Compare', 'Compare', 'an optional tech label')
@enduml
```

