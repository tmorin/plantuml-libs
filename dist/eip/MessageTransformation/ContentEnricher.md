# Content Enricher

```text
eip/MessageTransformation/ContentEnricher
```

```text
include('eip/MessageTransformation/ContentEnricher')
```

|icon|element|
|---|---|
|![](ContentEnricher.png)|![](ContentEnricher.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the ContentEnricher element
include('eip/MessageTransformation/ContentEnricher')
ContentEnricher('content_enricher', 'Content Enricher', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the ContentEnricher element
include('eip/MessageTransformation/ContentEnricher')
ContentEnricher('content_enricher', 'Content Enricher', 'an optional tech field')
@enduml
```

