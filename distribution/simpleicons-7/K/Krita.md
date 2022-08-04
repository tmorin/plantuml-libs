# Krita


```text
simpleicons-7/K/Krita
```

```text
include('simpleicons-7/K/Krita')
```



| Illustration | Krita |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/K/Krita.png) | ![illustration for Krita](../../simpleicons-7/K/Krita.Local.png) |




## Krita

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Krita
include('simpleicons-7/K/Krita')

' renders the element
Krita('Krita', 'Krita', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Krita
include('simpleicons-7/K/Krita')

' renders the element
Krita('Krita', 'Krita', 'an optional tech label', 'an optional description')
@enduml
```

