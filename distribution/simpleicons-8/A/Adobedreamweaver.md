# Adobedreamweaver


```text
simpleicons-8/A/Adobedreamweaver
```

```text
include('simpleicons-8/A/Adobedreamweaver')
```



| Illustration | Adobedreamweaver |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Adobedreamweaver.png) | ![illustration for Adobedreamweaver](../../simpleicons-8/A/Adobedreamweaver.Local.png) |




## Adobedreamweaver

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Adobedreamweaver
include('simpleicons-8/A/Adobedreamweaver')

' renders the element
Adobedreamweaver('Adobedreamweaver', 'Adobedreamweaver', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Adobedreamweaver
include('simpleicons-8/A/Adobedreamweaver')

' renders the element
Adobedreamweaver('Adobedreamweaver', 'Adobedreamweaver', 'an optional tech label', 'an optional description')
@enduml
```

