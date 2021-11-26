# FormatQuote


```text
material-4/Editor/FormatQuote
```

```text
include('material-4/Editor/FormatQuote')
```



| Illustration | FormatQuote |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatQuote.png) | ![illustration for FormatQuote](../../material-4/Editor/FormatQuote.Local.png) |




## FormatQuote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatQuote
include('material-4/Editor/FormatQuote')

' renders the element
FormatQuote('FormatQuote', 'Format Quote', 'an optional tech label')
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

' loads the Item which embeds the element FormatQuote
include('material-4/Editor/FormatQuote')

' renders the element
FormatQuote('FormatQuote', 'Format Quote', 'an optional tech label')
@enduml
```

