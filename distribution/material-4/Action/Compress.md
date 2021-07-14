# Compress


```text
material-4/Action/Compress
```

```text
include('material-4/Action/Compress')
```



| Illustration | Compress |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Compress.png) | ![illustration for Compress](../../material-4/Action/Compress.Local.png) |




## Compress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Compress
include('material-4/Action/Compress')

' renders the element
Compress('Compress', 'Compress', 'an optional tech label')
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

' loads the Item which embeds the element Compress
include('material-4/Action/Compress')

' renders the element
Compress('Compress', 'Compress', 'an optional tech label')
@enduml
```

