# Adobe


```text
simpleicons-5/A/Adobe
```

```text
include('simpleicons-5/A/Adobe')
```



| Illustration | Adobe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Adobe.png) | ![illustration for Adobe](../../simpleicons-5/A/Adobe.Local.png) |




## Adobe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adobe
include('simpleicons-5/A/Adobe')

' renders the element
Adobe('Adobe', 'Adobe', 'an optional tech label')
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

' loads the Item which embeds the element Adobe
include('simpleicons-5/A/Adobe')

' renders the element
Adobe('Adobe', 'Adobe', 'an optional tech label')
@enduml
```

