# RequestQuote


```text
material-4/File/RequestQuote
```

```text
include('material-4/File/RequestQuote')
```



| Illustration | RequestQuote |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/RequestQuote.png) | ![illustration for RequestQuote](../../material-4/File/RequestQuote.Local.png) |




## RequestQuote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RequestQuote
include('material-4/File/RequestQuote')

' renders the element
RequestQuote('RequestQuote', 'Request Quote', 'an optional tech label')
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

' loads the Item which embeds the element RequestQuote
include('material-4/File/RequestQuote')

' renders the element
RequestQuote('RequestQuote', 'Request Quote', 'an optional tech label')
@enduml
```

