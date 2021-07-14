# GTranslate


```text
material-4/Action/GTranslate
```

```text
include('material-4/Action/GTranslate')
```



| Illustration | GTranslate |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/GTranslate.png) | ![illustration for GTranslate](../../material-4/Action/GTranslate.Local.png) |




## GTranslate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element GTranslate
include('material-4/Action/GTranslate')

' renders the element
GTranslate('GTranslate', 'G Translate', 'an optional tech label')
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

' loads the Item which embeds the element GTranslate
include('material-4/Action/GTranslate')

' renders the element
GTranslate('GTranslate', 'G Translate', 'an optional tech label')
@enduml
```

