# Contactless


```text
material-4/Action/Contactless
```

```text
include('material-4/Action/Contactless')
```



| Illustration | Contactless |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Contactless.png) | ![illustration for Contactless](../../material-4/Action/Contactless.Local.png) |




## Contactless

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Contactless
include('material-4/Action/Contactless')

' renders the element
Contactless('Contactless', 'Contactless', 'an optional tech label')
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

' loads the Item which embeds the element Contactless
include('material-4/Action/Contactless')

' renders the element
Contactless('Contactless', 'Contactless', 'an optional tech label')
@enduml
```

