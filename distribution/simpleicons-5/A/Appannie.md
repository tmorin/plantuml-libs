# Appannie


```text
simpleicons-5/A/Appannie
```

```text
include('simpleicons-5/A/Appannie')
```



| Illustration | Appannie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Appannie.png) | ![illustration for Appannie](../../simpleicons-5/A/Appannie.Local.png) |




## Appannie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Appannie
include('simpleicons-5/A/Appannie')

' renders the element
Appannie('Appannie', 'Appannie', 'an optional tech label')
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

' loads the Item which embeds the element Appannie
include('simpleicons-5/A/Appannie')

' renders the element
Appannie('Appannie', 'Appannie', 'an optional tech label')
@enduml
```

