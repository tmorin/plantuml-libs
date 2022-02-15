# Aparat


```text
simpleicons-6/A/Aparat
```

```text
include('simpleicons-6/A/Aparat')
```



| Illustration | Aparat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Aparat.png) | ![illustration for Aparat](../../simpleicons-6/A/Aparat.Local.png) |




## Aparat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aparat
include('simpleicons-6/A/Aparat')

' renders the element
Aparat('Aparat', 'Aparat', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aparat
include('simpleicons-6/A/Aparat')

' renders the element
Aparat('Aparat', 'Aparat', 'an optional tech label')
@enduml
```

