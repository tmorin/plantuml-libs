# Lighthouse


```text
simpleicons-7/L/Lighthouse
```

```text
include('simpleicons-7/L/Lighthouse')
```



| Illustration | Lighthouse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Lighthouse.png) | ![illustration for Lighthouse](../../simpleicons-7/L/Lighthouse.Local.png) |




## Lighthouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Lighthouse
include('simpleicons-7/L/Lighthouse')

' renders the element
Lighthouse('Lighthouse', 'Lighthouse', 'an optional tech label')
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

' loads the Item which embeds the element Lighthouse
include('simpleicons-7/L/Lighthouse')

' renders the element
Lighthouse('Lighthouse', 'Lighthouse', 'an optional tech label')
@enduml
```

