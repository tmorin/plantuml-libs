# Pjsip


```text
simpleicons-5/P/Pjsip
```

```text
include('simpleicons-5/P/Pjsip')
```



| Illustration | Pjsip |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pjsip.png) | ![illustration for Pjsip](../../simpleicons-5/P/Pjsip.Local.png) |




## Pjsip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pjsip
include('simpleicons-5/P/Pjsip')

' renders the element
Pjsip('Pjsip', 'Pjsip', 'an optional tech label')
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

' loads the Item which embeds the element Pjsip
include('simpleicons-5/P/Pjsip')

' renders the element
Pjsip('Pjsip', 'Pjsip', 'an optional tech label')
@enduml
```

