# Jet


```text
simpleicons-5/J/Jet
```

```text
include('simpleicons-5/J/Jet')
```



| Illustration | Jet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jet.png) | ![illustration for Jet](../../simpleicons-5/J/Jet.Local.png) |




## Jet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jet
include('simpleicons-5/J/Jet')

' renders the element
Jet('Jet', 'Jet', 'an optional tech label')
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

' loads the Item which embeds the element Jet
include('simpleicons-5/J/Jet')

' renders the element
Jet('Jet', 'Jet', 'an optional tech label')
@enduml
```

