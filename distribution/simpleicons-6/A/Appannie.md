# Appannie


```text
simpleicons-6/A/Appannie
```

```text
include('simpleicons-6/A/Appannie')
```



| Illustration | Appannie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Appannie.png) | ![illustration for Appannie](../../simpleicons-6/A/Appannie.Local.png) |




## Appannie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Appannie
include('simpleicons-6/A/Appannie')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Appannie
include('simpleicons-6/A/Appannie')

' renders the element
Appannie('Appannie', 'Appannie', 'an optional tech label')
@enduml
```

