# Nubank


```text
simpleicons-5/N/Nubank
```

```text
include('simpleicons-5/N/Nubank')
```



| Illustration | Nubank |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nubank.png) | ![illustration for Nubank](../../simpleicons-5/N/Nubank.Local.png) |




## Nubank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nubank
include('simpleicons-5/N/Nubank')

' renders the element
Nubank('Nubank', 'Nubank', 'an optional tech label')
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

' loads the Item which embeds the element Nubank
include('simpleicons-5/N/Nubank')

' renders the element
Nubank('Nubank', 'Nubank', 'an optional tech label')
@enduml
```

