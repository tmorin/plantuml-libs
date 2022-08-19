# Affinitydesigner


```text
simpleicons-7/A/Affinitydesigner
```

```text
include('simpleicons-7/A/Affinitydesigner')
```



| Illustration | Affinitydesigner |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Affinitydesigner.png) | ![illustration for Affinitydesigner](../../simpleicons-7/A/Affinitydesigner.Local.png) |




## Affinitydesigner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Affinitydesigner
include('simpleicons-7/A/Affinitydesigner')

' renders the element
Affinitydesigner('Affinitydesigner', 'Affinitydesigner', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Affinitydesigner
include('simpleicons-7/A/Affinitydesigner')

' renders the element
Affinitydesigner('Affinitydesigner', 'Affinitydesigner', 'an optional tech label', 'an optional description')
@enduml
```
