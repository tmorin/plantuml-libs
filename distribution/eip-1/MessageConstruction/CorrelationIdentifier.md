# CorrelationIdentifier


```text
eip-1/MessageConstruction/CorrelationIdentifier
```

```text
include('eip-1/MessageConstruction/CorrelationIdentifier')
```



| Illustration | CorrelationIdentifier | CorrelationIdentifierGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessageConstruction/CorrelationIdentifier.png) | ![illustration for CorrelationIdentifier](../../eip-1/MessageConstruction/CorrelationIdentifier.Local.png) | ![illustration for CorrelationIdentifierGroup](../../eip-1/MessageConstruction/CorrelationIdentifierGroup.Local.png) |




## CorrelationIdentifier

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element CorrelationIdentifier
include('eip-1/MessageConstruction/CorrelationIdentifier')

' renders the element
CorrelationIdentifier('CorrelationIdentifier', 'Correlation Identifier', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CorrelationIdentifier
include('eip-1/MessageConstruction/CorrelationIdentifier')

' renders the element
CorrelationIdentifier('CorrelationIdentifier', 'Correlation Identifier', 'an optional tech label', 'an optional description')
@enduml
```

## CorrelationIdentifierGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element CorrelationIdentifierGroup
include('eip-1/MessageConstruction/CorrelationIdentifier')

' renders the element
CorrelationIdentifierGroup('CorrelationIdentifierGroup', 'Correlation Identifier Group', 'an optional tech label') {
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

' loads the Item which embeds the element CorrelationIdentifierGroup
include('eip-1/MessageConstruction/CorrelationIdentifier')

' renders the element
CorrelationIdentifierGroup('CorrelationIdentifierGroup', 'Correlation Identifier Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

