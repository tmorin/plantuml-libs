# Gofundme


```text
simpleicons-5/G/Gofundme
```

```text
include('simpleicons-5/G/Gofundme')
```



| Illustration | Gofundme |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gofundme.png) | ![illustration for Gofundme](../../simpleicons-5/G/Gofundme.Local.png) |




## Gofundme

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gofundme
include('simpleicons-5/G/Gofundme')

' renders the element
Gofundme('Gofundme', 'Gofundme', 'an optional tech label')
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

' loads the Item which embeds the element Gofundme
include('simpleicons-5/G/Gofundme')

' renders the element
Gofundme('Gofundme', 'Gofundme', 'an optional tech label')
@enduml
```

