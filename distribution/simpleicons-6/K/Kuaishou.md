# Kuaishou


```text
simpleicons-6/K/Kuaishou
```

```text
include('simpleicons-6/K/Kuaishou')
```



| Illustration | Kuaishou |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kuaishou.png) | ![illustration for Kuaishou](../../simpleicons-6/K/Kuaishou.Local.png) |




## Kuaishou

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kuaishou
include('simpleicons-6/K/Kuaishou')

' renders the element
Kuaishou('Kuaishou', 'Kuaishou', 'an optional tech label')
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

' loads the Item which embeds the element Kuaishou
include('simpleicons-6/K/Kuaishou')

' renders the element
Kuaishou('Kuaishou', 'Kuaishou', 'an optional tech label')
@enduml
```

