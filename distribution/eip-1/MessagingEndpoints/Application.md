# Application


```text
eip-1/MessagingEndpoints/Application
```

```text
include('eip-1/MessagingEndpoints/Application')
```



| Illustration | Application | ApplicationGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingEndpoints/Application.png) | ![illustration for Application](../../eip-1/MessagingEndpoints/Application.Local.png) | ![illustration for ApplicationGroup](../../eip-1/MessagingEndpoints/ApplicationGroup.Local.png) |




## Application

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element Application
include('eip-1/MessagingEndpoints/Application')

' renders the element
Application('Application', 'Application', 'an optional tech label')
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

' loads the Item which embeds the element Application
include('eip-1/MessagingEndpoints/Application')

' renders the element
Application('Application', 'Application', 'an optional tech label')
@enduml
```

## ApplicationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element ApplicationGroup
include('eip-1/MessagingEndpoints/Application')

' renders the element
ApplicationGroup('ApplicationGroup', 'Application Group', 'an optional tech label') {
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

' loads the Item which embeds the element ApplicationGroup
include('eip-1/MessagingEndpoints/Application')

' renders the element
ApplicationGroup('ApplicationGroup', 'Application Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

