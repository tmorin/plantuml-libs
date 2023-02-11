# Wipro


```text
simpleicons-8/W/Wipro
```

```text
include('simpleicons-8/W/Wipro')
```



| Illustration | Wipro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Wipro.png) | ![illustration for Wipro](../../simpleicons-8/W/Wipro.Local.png) |




## Wipro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Wipro
include('simpleicons-8/W/Wipro')

' renders the element
Wipro('Wipro', 'Wipro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wipro
include('simpleicons-8/W/Wipro')

' renders the element
Wipro('Wipro', 'Wipro', 'an optional tech label', 'an optional description')
@enduml
```

