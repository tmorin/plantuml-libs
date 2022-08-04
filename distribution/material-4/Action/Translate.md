# Translate


```text
material-4/Action/Translate
```

```text
include('material-4/Action/Translate')
```



| Illustration | Translate |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Translate.png) | ![illustration for Translate](../../material-4/Action/Translate.Local.png) |




## Translate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Translate
include('material-4/Action/Translate')

' renders the element
Translate('Translate', 'Translate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Translate
include('material-4/Action/Translate')

' renders the element
Translate('Translate', 'Translate', 'an optional tech label', 'an optional description')
@enduml
```

