# FormatTextdirectionLToR


```text
material-4/Editor/FormatTextdirectionLToR
```

```text
include('material-4/Editor/FormatTextdirectionLToR')
```



| Illustration | FormatTextdirectionLToR |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatTextdirectionLToR.png) | ![illustration for FormatTextdirectionLToR](../../material-4/Editor/FormatTextdirectionLToR.Local.png) |




## FormatTextdirectionLToR

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatTextdirectionLToR
include('material-4/Editor/FormatTextdirectionLToR')

' renders the element
FormatTextdirectionLToR('FormatTextdirectionLToR', 'Format Textdirection L To R', 'an optional tech label')
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

' loads the Item which embeds the element FormatTextdirectionLToR
include('material-4/Editor/FormatTextdirectionLToR')

' renders the element
FormatTextdirectionLToR('FormatTextdirectionLToR', 'Format Textdirection L To R', 'an optional tech label')
@enduml
```

