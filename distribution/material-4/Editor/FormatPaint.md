# FormatPaint


```text
material-4/Editor/FormatPaint
```

```text
include('material-4/Editor/FormatPaint')
```



| Illustration | FormatPaint |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatPaint.png) | ![illustration for FormatPaint](../../material-4/Editor/FormatPaint.Local.png) |




## FormatPaint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatPaint
include('material-4/Editor/FormatPaint')

' renders the element
FormatPaint('FormatPaint', 'Format Paint', 'an optional tech label')
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

' loads the Item which embeds the element FormatPaint
include('material-4/Editor/FormatPaint')

' renders the element
FormatPaint('FormatPaint', 'Format Paint', 'an optional tech label')
@enduml
```

