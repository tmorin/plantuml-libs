# Application


```text
eip/MessagingEndpoints/Application
```

```text
include('eip/MessagingEndpoints/Application')
```



| Illustration | Application | ApplicationGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessagingEndpoints/Application.png) | ![illustration for Application](../../eip/MessagingEndpoints/Application.Local.png) | ![illustration for ApplicationGroup](../../eip/MessagingEndpoints/ApplicationGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApplicationXs>`
- `<$ApplicationSm>`
- `<$ApplicationMd>`
- `<$ApplicationLg>`





## Application

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element Application
include('eip/MessagingEndpoints/Application')

' renders the element
Application('Application', 'Application', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Application
include('eip/MessagingEndpoints/Application')

' renders the element
Application('Application', 'Application', 'an optional tech label', 'an optional description')
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
include('eip/bootstrap')

' loads the Item which embeds the element ApplicationGroup
include('eip/MessagingEndpoints/Application')

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
include('eip/bootstrap')

' loads the Item which embeds the element ApplicationGroup
include('eip/MessagingEndpoints/Application')

' renders the element
ApplicationGroup('ApplicationGroup', 'Application Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

