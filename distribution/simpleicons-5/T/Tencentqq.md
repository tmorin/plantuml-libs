# Tencentqq


```text
simpleicons-5/T/Tencentqq
```

```text
include('simpleicons-5/T/Tencentqq')
```



| Illustration | Tencentqq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tencentqq.png) | ![illustration for Tencentqq](../../simpleicons-5/T/Tencentqq.Local.png) |




## Tencentqq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tencentqq
include('simpleicons-5/T/Tencentqq')

' renders the element
Tencentqq('Tencentqq', 'Tencentqq', 'an optional tech label')
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

' loads the Item which embeds the element Tencentqq
include('simpleicons-5/T/Tencentqq')

' renders the element
Tencentqq('Tencentqq', 'Tencentqq', 'an optional tech label')
@enduml
```

