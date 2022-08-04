# Norwegian


```text
simpleicons-7/N/Norwegian
```

```text
include('simpleicons-7/N/Norwegian')
```



| Illustration | Norwegian |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Norwegian.png) | ![illustration for Norwegian](../../simpleicons-7/N/Norwegian.Local.png) |




## Norwegian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Norwegian
include('simpleicons-7/N/Norwegian')

' renders the element
Norwegian('Norwegian', 'Norwegian', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Norwegian
include('simpleicons-7/N/Norwegian')

' renders the element
Norwegian('Norwegian', 'Norwegian', 'an optional tech label', 'an optional description')
@enduml
```

