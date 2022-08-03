# Tubi


```text
simpleicons-7/T/Tubi
```

```text
include('simpleicons-7/T/Tubi')
```



| Illustration | Tubi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Tubi.png) | ![illustration for Tubi](../../simpleicons-7/T/Tubi.Local.png) |




## Tubi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tubi
include('simpleicons-7/T/Tubi')

' renders the element
Tubi('Tubi', 'Tubi', 'an optional tech label')
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

' loads the Item which embeds the element Tubi
include('simpleicons-7/T/Tubi')

' renders the element
Tubi('Tubi', 'Tubi', 'an optional tech label')
@enduml
```
