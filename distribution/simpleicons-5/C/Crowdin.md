# Crowdin


```text
simpleicons-5/C/Crowdin
```

```text
include('simpleicons-5/C/Crowdin')
```



| Illustration | Crowdin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Crowdin.png) | ![illustration for Crowdin](../../simpleicons-5/C/Crowdin.Local.png) |




## Crowdin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Crowdin
include('simpleicons-5/C/Crowdin')

' renders the element
Crowdin('Crowdin', 'Crowdin', 'an optional tech label')
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

' loads the Item which embeds the element Crowdin
include('simpleicons-5/C/Crowdin')

' renders the element
Crowdin('Crowdin', 'Crowdin', 'an optional tech label')
@enduml
```

