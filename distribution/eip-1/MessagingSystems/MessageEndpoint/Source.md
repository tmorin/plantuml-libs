# Source


```text
eip-1/MessagingSystems/MessageEndpoint/Source
```

```text
include('eip-1/MessagingSystems/MessageEndpoint/Source')
```



| Illustration | Source | SourceGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../../eip-1/MessagingSystems/MessageEndpoint/Source.png) | ![illustration for Source](../../../eip-1/MessagingSystems/MessageEndpoint/Source.Local.png) | ![illustration for SourceGroup](../../../eip-1/MessagingSystems/MessageEndpoint/SourceGroup.Local.png) |




## Source

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element Source
include('eip-1/MessagingSystems/MessageEndpoint/Source')

' renders the element
Source('Source', 'Source', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element Source
include('eip-1/MessagingSystems/MessageEndpoint/Source')

' renders the element
Source('Source', 'Source', 'an optional tech label')
@enduml
```

## SourceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element SourceGroup
include('eip-1/MessagingSystems/MessageEndpoint/Source')

' renders the element
SourceGroup('SourceGroup', 'Source Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element SourceGroup
include('eip-1/MessagingSystems/MessageEndpoint/Source')

' renders the element
SourceGroup('SourceGroup', 'Source Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

