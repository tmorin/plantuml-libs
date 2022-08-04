# ContentEnricher


```text
eip-1/MessageTransformation/ContentEnricher
```

```text
include('eip-1/MessageTransformation/ContentEnricher')
```



| Illustration | ContentEnricher | ContentEnricherGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessageTransformation/ContentEnricher.png) | ![illustration for ContentEnricher](../../eip-1/MessageTransformation/ContentEnricher.Local.png) | ![illustration for ContentEnricherGroup](../../eip-1/MessageTransformation/ContentEnricherGroup.Local.png) |




## ContentEnricher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element ContentEnricher
include('eip-1/MessageTransformation/ContentEnricher')

' renders the element
ContentEnricher('ContentEnricher', 'Content Enricher', 'an optional tech label', 'an optional description')
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
include('eip-1/bootstrap')

' loads the Item which embeds the element ContentEnricher
include('eip-1/MessageTransformation/ContentEnricher')

' renders the element
ContentEnricher('ContentEnricher', 'Content Enricher', 'an optional tech label', 'an optional description')
@enduml
```

## ContentEnricherGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element ContentEnricherGroup
include('eip-1/MessageTransformation/ContentEnricher')

' renders the element
ContentEnricherGroup('ContentEnricherGroup', 'Content Enricher Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
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
include('eip-1/bootstrap')

' loads the Item which embeds the element ContentEnricherGroup
include('eip-1/MessageTransformation/ContentEnricher')

' renders the element
ContentEnricherGroup('ContentEnricherGroup', 'Content Enricher Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

