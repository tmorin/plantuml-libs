# Krita


```text
simpleicons-5/K/Krita
```

```text
include('simpleicons-5/K/Krita')
```



| Illustration | Krita |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Krita.png) | ![illustration for Krita](../../simpleicons-5/K/Krita.Local.png) |




## Krita

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Krita
include('simpleicons-5/K/Krita')

' renders the element
Krita('Krita', 'Krita', 'an optional tech label')
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

' loads the Item which embeds the element Krita
include('simpleicons-5/K/Krita')

' renders the element
Krita('Krita', 'Krita', 'an optional tech label')
@enduml
```

