# Tonality


```text
material-4/Image/Tonality
```

```text
include('material-4/Image/Tonality')
```



| Illustration | Tonality |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Tonality.png) | ![illustration for Tonality](../../material-4/Image/Tonality.Local.png) |




## Tonality

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Tonality
include('material-4/Image/Tonality')

' renders the element
Tonality('Tonality', 'Tonality', 'an optional tech label')
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

' loads the Item which embeds the element Tonality
include('material-4/Image/Tonality')

' renders the element
Tonality('Tonality', 'Tonality', 'an optional tech label')
@enduml
```

