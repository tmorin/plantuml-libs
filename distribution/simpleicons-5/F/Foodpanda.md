# Foodpanda


```text
simpleicons-5/F/Foodpanda
```

```text
include('simpleicons-5/F/Foodpanda')
```



| Illustration | Foodpanda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Foodpanda.png) | ![illustration for Foodpanda](../../simpleicons-5/F/Foodpanda.Local.png) |




## Foodpanda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Foodpanda
include('simpleicons-5/F/Foodpanda')

' renders the element
Foodpanda('Foodpanda', 'Foodpanda', 'an optional tech label')
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

' loads the Item which embeds the element Foodpanda
include('simpleicons-5/F/Foodpanda')

' renders the element
Foodpanda('Foodpanda', 'Foodpanda', 'an optional tech label')
@enduml
```

