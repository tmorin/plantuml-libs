# Fauna


```text
simpleicons-8/F/Fauna
```

```text
include('simpleicons-8/F/Fauna')
```



| Illustration | Fauna |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fauna.png) | ![illustration for Fauna](../../simpleicons-8/F/Fauna.Local.png) |




## Fauna

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fauna
include('simpleicons-8/F/Fauna')

' renders the element
Fauna('Fauna', 'Fauna', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fauna
include('simpleicons-8/F/Fauna')

' renders the element
Fauna('Fauna', 'Fauna', 'an optional tech label', 'an optional description')
@enduml
```

