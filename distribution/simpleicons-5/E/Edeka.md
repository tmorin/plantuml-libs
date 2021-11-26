# Edeka


```text
simpleicons-5/E/Edeka
```

```text
include('simpleicons-5/E/Edeka')
```



| Illustration | Edeka |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Edeka.png) | ![illustration for Edeka](../../simpleicons-5/E/Edeka.Local.png) |




## Edeka

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Edeka
include('simpleicons-5/E/Edeka')

' renders the element
Edeka('Edeka', 'Edeka', 'an optional tech label')
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

' loads the Item which embeds the element Edeka
include('simpleicons-5/E/Edeka')

' renders the element
Edeka('Edeka', 'Edeka', 'an optional tech label')
@enduml
```

