# Edeka


```text
simpleicons-8/E/Edeka
```

```text
include('simpleicons-8/E/Edeka')
```



| Illustration | Edeka |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Edeka.png) | ![illustration for Edeka](../../simpleicons-8/E/Edeka.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EdekaXs>`
- `<$EdekaSm>`
- `<$EdekaMd>`
- `<$EdekaLg>`





## Edeka

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Edeka
include('simpleicons-8/E/Edeka')

' renders the element
Edeka('Edeka', 'Edeka', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Edeka
include('simpleicons-8/E/Edeka')

' renders the element
Edeka('Edeka', 'Edeka', 'an optional tech label', 'an optional description')
@enduml
```

