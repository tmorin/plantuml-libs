# MessageFilter


```text
eip-1/MessageRouting/MessageFilter
```

```text
include('eip-1/MessageRouting/MessageFilter')
```



| Illustration | MessageFilter | MessageFilterGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessageRouting/MessageFilter.png) | ![illustration for MessageFilter](../../eip-1/MessageRouting/MessageFilter.Local.png) | ![illustration for MessageFilterGroup](../../eip-1/MessageRouting/MessageFilterGroup.Local.png) |




## MessageFilter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageFilter
include('eip-1/MessageRouting/MessageFilter')

' renders the element
MessageFilter('MessageFilter', 'Message Filter', 'an optional tech label')
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

' loads the Item which embeds the element MessageFilter
include('eip-1/MessageRouting/MessageFilter')

' renders the element
MessageFilter('MessageFilter', 'Message Filter', 'an optional tech label')
@enduml
```

## MessageFilterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageFilterGroup
include('eip-1/MessageRouting/MessageFilter')

' renders the element
MessageFilterGroup('MessageFilterGroup', 'Message Filter Group', 'an optional tech label') {
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

' loads the Item which embeds the element MessageFilterGroup
include('eip-1/MessageRouting/MessageFilter')

' renders the element
MessageFilterGroup('MessageFilterGroup', 'Message Filter Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

