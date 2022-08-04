# InvertColors


```text
material-4/Action/InvertColors
```

```text
include('material-4/Action/InvertColors')
```



| Illustration | InvertColors |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/InvertColors.png) | ![illustration for InvertColors](../../material-4/Action/InvertColors.Local.png) |




## InvertColors

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element InvertColors
include('material-4/Action/InvertColors')

' renders the element
InvertColors('InvertColors', 'Invert Colors', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element InvertColors
include('material-4/Action/InvertColors')

' renders the element
InvertColors('InvertColors', 'Invert Colors', 'an optional tech label', 'an optional description')
@enduml
```

