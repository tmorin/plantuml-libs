# Jbl


```text
simpleicons-5/J/Jbl
```

```text
include('simpleicons-5/J/Jbl')
```



| Illustration | Jbl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jbl.png) | ![illustration for Jbl](../../simpleicons-5/J/Jbl.Local.png) |




## Jbl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jbl
include('simpleicons-5/J/Jbl')

' renders the element
Jbl('Jbl', 'Jbl', 'an optional tech label')
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

' loads the Item which embeds the element Jbl
include('simpleicons-5/J/Jbl')

' renders the element
Jbl('Jbl', 'Jbl', 'an optional tech label')
@enduml
```

