# DoubleArrow


```text
material-4/Navigation/DoubleArrow
```

```text
include('material-4/Navigation/DoubleArrow')
```



| Illustration | DoubleArrow |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/DoubleArrow.png) | ![illustration for DoubleArrow](../../material-4/Navigation/DoubleArrow.Local.png) |




## DoubleArrow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DoubleArrow
include('material-4/Navigation/DoubleArrow')

' renders the element
DoubleArrow('DoubleArrow', 'Double Arrow', 'an optional tech label')
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

' loads the Item which embeds the element DoubleArrow
include('material-4/Navigation/DoubleArrow')

' renders the element
DoubleArrow('DoubleArrow', 'Double Arrow', 'an optional tech label')
@enduml
```

