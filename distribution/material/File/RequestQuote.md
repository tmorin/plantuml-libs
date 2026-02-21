# RequestQuote


```text
material/File/RequestQuote
```

```text
include('material/File/RequestQuote')
```



| Illustration | RequestQuote |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/RequestQuote.png) | ![illustration for RequestQuote](../../material/File/RequestQuote.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RequestQuoteXs>`
- `<$RequestQuoteSm>`
- `<$RequestQuoteMd>`
- `<$RequestQuoteLg>`





## RequestQuote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RequestQuote
include('material/File/RequestQuote')

' renders the element
RequestQuote('RequestQuote', 'Request Quote', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element RequestQuote
include('material/File/RequestQuote')

' renders the element
RequestQuote('RequestQuote', 'Request Quote', 'an optional tech label', 'an optional description')
@enduml
```

