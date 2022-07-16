# Altiumdesigner


```text
simpleicons-7/A/Altiumdesigner
```

```text
include('simpleicons-7/A/Altiumdesigner')
```



| Illustration | Altiumdesigner |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Altiumdesigner.png) | ![illustration for Altiumdesigner](../../simpleicons-7/A/Altiumdesigner.Local.png) |




## Altiumdesigner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Altiumdesigner
include('simpleicons-7/A/Altiumdesigner')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Altiumdesigner
include('simpleicons-7/A/Altiumdesigner')

' renders the element
Altiumdesigner('Altiumdesigner', 'Altiumdesigner', 'an optional tech label')
@enduml
```

