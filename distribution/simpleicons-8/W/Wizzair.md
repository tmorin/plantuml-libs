# Wizzair


```text
simpleicons-8/W/Wizzair
```

```text
include('simpleicons-8/W/Wizzair')
```



| Illustration | Wizzair |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Wizzair.png) | ![illustration for Wizzair](../../simpleicons-8/W/Wizzair.Local.png) |




## Wizzair

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Wizzair
include('simpleicons-8/W/Wizzair')

' renders the element
Wizzair('Wizzair', 'Wizzair', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wizzair
include('simpleicons-8/W/Wizzair')

' renders the element
Wizzair('Wizzair', 'Wizzair', 'an optional tech label', 'an optional description')
@enduml
```

