# ContentEnricher


```text
eip/MessageTransformation/ContentEnricher
```

```text
include('eip/MessageTransformation/ContentEnricher')
```



| Illustration | ContentEnricher | ContentEnricherGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessageTransformation/ContentEnricher.png) | ![illustration for ContentEnricher](../../eip/MessageTransformation/ContentEnricher.Local.png) | ![illustration for ContentEnricherGroup](../../eip/MessageTransformation/ContentEnricherGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContentEnricherXs>`
- `<$ContentEnricherSm>`
- `<$ContentEnricherMd>`
- `<$ContentEnricherLg>`





## ContentEnricher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element ContentEnricher
include('eip/MessageTransformation/ContentEnricher')

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
include('eip/bootstrap')

' loads the Item which embeds the element ContentEnricher
include('eip/MessageTransformation/ContentEnricher')

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
include('eip/bootstrap')

' loads the Item which embeds the element ContentEnricherGroup
include('eip/MessageTransformation/ContentEnricher')

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
include('eip/bootstrap')

' loads the Item which embeds the element ContentEnricherGroup
include('eip/MessageTransformation/ContentEnricher')

' renders the element
ContentEnricherGroup('ContentEnricherGroup', 'Content Enricher Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

