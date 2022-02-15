# Wistia


```text
simpleicons-6/W/Wistia
```

```text
include('simpleicons-6/W/Wistia')
```



| Illustration | Wistia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wistia.png) | ![illustration for Wistia](../../simpleicons-6/W/Wistia.Local.png) |




## Wistia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wistia
include('simpleicons-6/W/Wistia')

' renders the element
Wistia('Wistia', 'Wistia', 'an optional tech label')
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

' loads the Item which embeds the element Wistia
include('simpleicons-6/W/Wistia')

' renders the element
Wistia('Wistia', 'Wistia', 'an optional tech label')
@enduml
```

