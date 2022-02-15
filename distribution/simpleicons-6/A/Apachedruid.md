# Apachedruid


```text
simpleicons-6/A/Apachedruid
```

```text
include('simpleicons-6/A/Apachedruid')
```



| Illustration | Apachedruid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Apachedruid.png) | ![illustration for Apachedruid](../../simpleicons-6/A/Apachedruid.Local.png) |




## Apachedruid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Apachedruid
include('simpleicons-6/A/Apachedruid')

' renders the element
Apachedruid('Apachedruid', 'Apachedruid', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Apachedruid
include('simpleicons-6/A/Apachedruid')

' renders the element
Apachedruid('Apachedruid', 'Apachedruid', 'an optional tech label')
@enduml
```

