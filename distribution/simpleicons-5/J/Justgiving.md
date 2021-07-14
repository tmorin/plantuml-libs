# Justgiving


```text
simpleicons-5/J/Justgiving
```

```text
include('simpleicons-5/J/Justgiving')
```



| Illustration | Justgiving |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Justgiving.png) | ![illustration for Justgiving](../../simpleicons-5/J/Justgiving.Local.png) |




## Justgiving

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Justgiving
include('simpleicons-5/J/Justgiving')

' renders the element
Justgiving('Justgiving', 'Justgiving', 'an optional tech label')
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

' loads the Item which embeds the element Justgiving
include('simpleicons-5/J/Justgiving')

' renders the element
Justgiving('Justgiving', 'Justgiving', 'an optional tech label')
@enduml
```

