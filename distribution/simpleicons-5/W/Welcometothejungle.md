# Welcometothejungle


```text
simpleicons-5/W/Welcometothejungle
```

```text
include('simpleicons-5/W/Welcometothejungle')
```



| Illustration | Welcometothejungle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Welcometothejungle.png) | ![illustration for Welcometothejungle](../../simpleicons-5/W/Welcometothejungle.Local.png) |




## Welcometothejungle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Welcometothejungle
include('simpleicons-5/W/Welcometothejungle')

' renders the element
Welcometothejungle('Welcometothejungle', 'Welcometothejungle', 'an optional tech label')
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

' loads the Item which embeds the element Welcometothejungle
include('simpleicons-5/W/Welcometothejungle')

' renders the element
Welcometothejungle('Welcometothejungle', 'Welcometothejungle', 'an optional tech label')
@enduml
```

