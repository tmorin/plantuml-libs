# Okta


```text
simpleicons-5/O/Okta
```

```text
include('simpleicons-5/O/Okta')
```



| Illustration | Okta |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Okta.png) | ![illustration for Okta](../../simpleicons-5/O/Okta.Local.png) |




## Okta

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Okta
include('simpleicons-5/O/Okta')

' renders the element
Okta('Okta', 'Okta', 'an optional tech label')
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

' loads the Item which embeds the element Okta
include('simpleicons-5/O/Okta')

' renders the element
Okta('Okta', 'Okta', 'an optional tech label')
@enduml
```

