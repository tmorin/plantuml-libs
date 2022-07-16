# Jest


```text
simpleicons-7/J/Jest
```

```text
include('simpleicons-7/J/Jest')
```



| Illustration | Jest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/J/Jest.png) | ![illustration for Jest](../../simpleicons-7/J/Jest.Local.png) |




## Jest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Jest
include('simpleicons-7/J/Jest')

' renders the element
Jest('Jest', 'Jest', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Jest
include('simpleicons-7/J/Jest')

' renders the element
Jest('Jest', 'Jest', 'an optional tech label')
@enduml
```

