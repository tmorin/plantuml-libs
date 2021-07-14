# Nbb


```text
simpleicons-5/N/Nbb
```

```text
include('simpleicons-5/N/Nbb')
```



| Illustration | Nbb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nbb.png) | ![illustration for Nbb](../../simpleicons-5/N/Nbb.Local.png) |




## Nbb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nbb
include('simpleicons-5/N/Nbb')

' renders the element
Nbb('Nbb', 'Nbb', 'an optional tech label')
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

' loads the Item which embeds the element Nbb
include('simpleicons-5/N/Nbb')

' renders the element
Nbb('Nbb', 'Nbb', 'an optional tech label')
@enduml
```

