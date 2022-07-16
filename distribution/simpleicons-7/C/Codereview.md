# Codereview


```text
simpleicons-7/C/Codereview
```

```text
include('simpleicons-7/C/Codereview')
```



| Illustration | Codereview |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Codereview.png) | ![illustration for Codereview](../../simpleicons-7/C/Codereview.Local.png) |




## Codereview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Codereview
include('simpleicons-7/C/Codereview')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Codereview
include('simpleicons-7/C/Codereview')

' renders the element
Codereview('Codereview', 'Codereview', 'an optional tech label')
@enduml
```

