# Codereview


```text
simpleicons-5/C/Codereview
```

```text
include('simpleicons-5/C/Codereview')
```



| Illustration | Codereview |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Codereview.png) | ![illustration for Codereview](../../simpleicons-5/C/Codereview.Local.png) |




## Codereview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codereview
include('simpleicons-5/C/Codereview')

' renders the element
Codereview('Codereview', 'Codereview', 'an optional tech label')
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

' loads the Item which embeds the element Codereview
include('simpleicons-5/C/Codereview')

' renders the element
Codereview('Codereview', 'Codereview', 'an optional tech label')
@enduml
```

