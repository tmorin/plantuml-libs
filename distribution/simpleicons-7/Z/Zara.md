# Zara


```text
simpleicons-7/Z/Zara
```

```text
include('simpleicons-7/Z/Zara')
```



| Illustration | Zara |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zara.png) | ![illustration for Zara](../../simpleicons-7/Z/Zara.Local.png) |




## Zara

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zara
include('simpleicons-7/Z/Zara')

' renders the element
Zara('Zara', 'Zara', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zara
include('simpleicons-7/Z/Zara')

' renders the element
Zara('Zara', 'Zara', 'an optional tech label', 'an optional description')
@enduml
```

