# Iced


```text
simpleicons-8/I/Iced
```

```text
include('simpleicons-8/I/Iced')
```



| Illustration | Iced |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Iced.png) | ![illustration for Iced](../../simpleicons-8/I/Iced.Local.png) |




## Iced

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Iced
include('simpleicons-8/I/Iced')

' renders the element
Iced('Iced', 'Iced', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Iced
include('simpleicons-8/I/Iced')

' renders the element
Iced('Iced', 'Iced', 'an optional tech label', 'an optional description')
@enduml
```

