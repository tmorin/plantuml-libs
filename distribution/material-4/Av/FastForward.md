# FastForward


```text
material-4/Av/FastForward
```

```text
include('material-4/Av/FastForward')
```



| Illustration | FastForward |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/FastForward.png) | ![illustration for FastForward](../../material-4/Av/FastForward.Local.png) |




## FastForward

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FastForward
include('material-4/Av/FastForward')

' renders the element
FastForward('FastForward', 'Fast Forward', 'an optional tech label')
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

' loads the Item which embeds the element FastForward
include('material-4/Av/FastForward')

' renders the element
FastForward('FastForward', 'Fast Forward', 'an optional tech label')
@enduml
```

