# Affinitydesigner


```text
simpleicons-5/A/Affinitydesigner
```

```text
include('simpleicons-5/A/Affinitydesigner')
```



| Illustration | Affinitydesigner |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Affinitydesigner.png) | ![illustration for Affinitydesigner](../../simpleicons-5/A/Affinitydesigner.Local.png) |




## Affinitydesigner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Affinitydesigner
include('simpleicons-5/A/Affinitydesigner')

' renders the element
Affinitydesigner('Affinitydesigner', 'Affinitydesigner', 'an optional tech label')
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

' loads the Item which embeds the element Affinitydesigner
include('simpleicons-5/A/Affinitydesigner')

' renders the element
Affinitydesigner('Affinitydesigner', 'Affinitydesigner', 'an optional tech label')
@enduml
```

