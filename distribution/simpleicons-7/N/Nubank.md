# Nubank


```text
simpleicons-7/N/Nubank
```

```text
include('simpleicons-7/N/Nubank')
```



| Illustration | Nubank |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Nubank.png) | ![illustration for Nubank](../../simpleicons-7/N/Nubank.Local.png) |




## Nubank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nubank
include('simpleicons-7/N/Nubank')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nubank
include('simpleicons-7/N/Nubank')

' renders the element
Nubank('Nubank', 'Nubank', 'an optional tech label')
@enduml
```

