# StarRate


```text
material-4/Action/StarRate
```

```text
include('material-4/Action/StarRate')
```



| Illustration | StarRate |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/StarRate.png) | ![illustration for StarRate](../../material-4/Action/StarRate.Local.png) |




## StarRate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element StarRate
include('material-4/Action/StarRate')

' renders the element
StarRate('StarRate', 'Star Rate', 'an optional tech label')
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

' loads the Item which embeds the element StarRate
include('material-4/Action/StarRate')

' renders the element
StarRate('StarRate', 'Star Rate', 'an optional tech label')
@enduml
```

