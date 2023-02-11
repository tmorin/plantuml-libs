# Tencentqq


```text
simpleicons-8/T/Tencentqq
```

```text
include('simpleicons-8/T/Tencentqq')
```



| Illustration | Tencentqq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Tencentqq.png) | ![illustration for Tencentqq](../../simpleicons-8/T/Tencentqq.Local.png) |




## Tencentqq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tencentqq
include('simpleicons-8/T/Tencentqq')

' renders the element
Tencentqq('Tencentqq', 'Tencentqq', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tencentqq
include('simpleicons-8/T/Tencentqq')

' renders the element
Tencentqq('Tencentqq', 'Tencentqq', 'an optional tech label', 'an optional description')
@enduml
```

