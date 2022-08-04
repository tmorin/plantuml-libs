# ErrorOutline


```text
material-4/Alert/ErrorOutline
```

```text
include('material-4/Alert/ErrorOutline')
```



| Illustration | ErrorOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Alert/ErrorOutline.png) | ![illustration for ErrorOutline](../../material-4/Alert/ErrorOutline.Local.png) |




## ErrorOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ErrorOutline
include('material-4/Alert/ErrorOutline')

' renders the element
ErrorOutline('ErrorOutline', 'Error Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ErrorOutline
include('material-4/Alert/ErrorOutline')

' renders the element
ErrorOutline('ErrorOutline', 'Error Outline', 'an optional tech label', 'an optional description')
@enduml
```

