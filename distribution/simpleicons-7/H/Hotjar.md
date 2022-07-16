# Hotjar


```text
simpleicons-7/H/Hotjar
```

```text
include('simpleicons-7/H/Hotjar')
```



| Illustration | Hotjar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/H/Hotjar.png) | ![illustration for Hotjar](../../simpleicons-7/H/Hotjar.Local.png) |




## Hotjar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Hotjar
include('simpleicons-7/H/Hotjar')

' renders the element
Hotjar('Hotjar', 'Hotjar', 'an optional tech label')
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

' loads the Item which embeds the element Hotjar
include('simpleicons-7/H/Hotjar')

' renders the element
Hotjar('Hotjar', 'Hotjar', 'an optional tech label')
@enduml
```

