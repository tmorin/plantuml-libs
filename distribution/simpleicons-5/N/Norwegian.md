# Norwegian


```text
simpleicons-5/N/Norwegian
```

```text
include('simpleicons-5/N/Norwegian')
```



| Illustration | Norwegian |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Norwegian.png) | ![illustration for Norwegian](../../simpleicons-5/N/Norwegian.Local.png) |




## Norwegian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Norwegian
include('simpleicons-5/N/Norwegian')

' renders the element
Norwegian('Norwegian', 'Norwegian', 'an optional tech label')
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

' loads the Item which embeds the element Norwegian
include('simpleicons-5/N/Norwegian')

' renders the element
Norwegian('Norwegian', 'Norwegian', 'an optional tech label')
@enduml
```

