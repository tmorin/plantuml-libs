# Altiumdesigner


```text
simpleicons-5/A/Altiumdesigner
```

```text
include('simpleicons-5/A/Altiumdesigner')
```



| Illustration | Altiumdesigner |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Altiumdesigner.png) | ![illustration for Altiumdesigner](../../simpleicons-5/A/Altiumdesigner.Local.png) |




## Altiumdesigner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Altiumdesigner
include('simpleicons-5/A/Altiumdesigner')

' renders the element
Altiumdesigner('Altiumdesigner', 'Altiumdesigner', 'an optional tech label')
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

' loads the Item which embeds the element Altiumdesigner
include('simpleicons-5/A/Altiumdesigner')

' renders the element
Altiumdesigner('Altiumdesigner', 'Altiumdesigner', 'an optional tech label')
@enduml
```

