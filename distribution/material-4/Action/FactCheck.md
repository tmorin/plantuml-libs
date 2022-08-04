# FactCheck


```text
material-4/Action/FactCheck
```

```text
include('material-4/Action/FactCheck')
```



| Illustration | FactCheck |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/FactCheck.png) | ![illustration for FactCheck](../../material-4/Action/FactCheck.Local.png) |




## FactCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FactCheck
include('material-4/Action/FactCheck')

' renders the element
FactCheck('FactCheck', 'Fact Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FactCheck
include('material-4/Action/FactCheck')

' renders the element
FactCheck('FactCheck', 'Fact Check', 'an optional tech label', 'an optional description')
@enduml
```

