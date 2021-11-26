# Jest


```text
simpleicons-5/J/Jest
```

```text
include('simpleicons-5/J/Jest')
```



| Illustration | Jest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jest.png) | ![illustration for Jest](../../simpleicons-5/J/Jest.Local.png) |




## Jest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jest
include('simpleicons-5/J/Jest')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jest
include('simpleicons-5/J/Jest')

' renders the element
Jest('Jest', 'Jest', 'an optional tech label')
@enduml
```

