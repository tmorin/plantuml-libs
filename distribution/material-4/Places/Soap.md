# Soap


```text
material-4/Places/Soap
```

```text
include('material-4/Places/Soap')
```



| Illustration | Soap |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Soap.png) | ![illustration for Soap](../../material-4/Places/Soap.Local.png) |




## Soap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Soap
include('material-4/Places/Soap')

' renders the element
Soap('Soap', 'Soap', 'an optional tech label')
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

' loads the Item which embeds the element Soap
include('material-4/Places/Soap')

' renders the element
Soap('Soap', 'Soap', 'an optional tech label')
@enduml
```

