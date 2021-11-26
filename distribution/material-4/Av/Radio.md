# Radio


```text
material-4/Av/Radio
```

```text
include('material-4/Av/Radio')
```



| Illustration | Radio |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Radio.png) | ![illustration for Radio](../../material-4/Av/Radio.Local.png) |




## Radio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Radio
include('material-4/Av/Radio')

' renders the element
Radio('Radio', 'Radio', 'an optional tech label')
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

' loads the Item which embeds the element Radio
include('material-4/Av/Radio')

' renders the element
Radio('Radio', 'Radio', 'an optional tech label')
@enduml
```

