# Nounproject


```text
simpleicons-5/N/Nounproject
```

```text
include('simpleicons-5/N/Nounproject')
```



| Illustration | Nounproject |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nounproject.png) | ![illustration for Nounproject](../../simpleicons-5/N/Nounproject.Local.png) |




## Nounproject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nounproject
include('simpleicons-5/N/Nounproject')

' renders the element
Nounproject('Nounproject', 'Nounproject', 'an optional tech label')
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

' loads the Item which embeds the element Nounproject
include('simpleicons-5/N/Nounproject')

' renders the element
Nounproject('Nounproject', 'Nounproject', 'an optional tech label')
@enduml
```

