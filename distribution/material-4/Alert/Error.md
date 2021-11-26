# Error


```text
material-4/Alert/Error
```

```text
include('material-4/Alert/Error')
```



| Illustration | Error |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Alert/Error.png) | ![illustration for Error](../../material-4/Alert/Error.Local.png) |




## Error

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Error
include('material-4/Alert/Error')

' renders the element
Error('Error', 'Error', 'an optional tech label')
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

' loads the Item which embeds the element Error
include('material-4/Alert/Error')

' renders the element
Error('Error', 'Error', 'an optional tech label')
@enduml
```

