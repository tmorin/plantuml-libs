# Brightness1


```text
material-4/Image/Brightness1
```

```text
include('material-4/Image/Brightness1')
```



| Illustration | Brightness1 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Brightness1.png) | ![illustration for Brightness1](../../material-4/Image/Brightness1.Local.png) |




## Brightness1

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Brightness1
include('material-4/Image/Brightness1')

' renders the element
Brightness1('Brightness1', 'Brightness1', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Brightness1
include('material-4/Image/Brightness1')

' renders the element
Brightness1('Brightness1', 'Brightness1', 'an optional tech label', 'an optional description')
@enduml
```

