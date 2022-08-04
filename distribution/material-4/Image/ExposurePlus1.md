# ExposurePlus1


```text
material-4/Image/ExposurePlus1
```

```text
include('material-4/Image/ExposurePlus1')
```



| Illustration | ExposurePlus1 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/ExposurePlus1.png) | ![illustration for ExposurePlus1](../../material-4/Image/ExposurePlus1.Local.png) |




## ExposurePlus1

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ExposurePlus1
include('material-4/Image/ExposurePlus1')

' renders the element
ExposurePlus1('ExposurePlus1', 'Exposure Plus1', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ExposurePlus1
include('material-4/Image/ExposurePlus1')

' renders the element
ExposurePlus1('ExposurePlus1', 'Exposure Plus1', 'an optional tech label', 'an optional description')
@enduml
```

