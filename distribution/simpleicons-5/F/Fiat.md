# Fiat


```text
simpleicons-5/F/Fiat
```

```text
include('simpleicons-5/F/Fiat')
```



| Illustration | Fiat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fiat.png) | ![illustration for Fiat](../../simpleicons-5/F/Fiat.Local.png) |




## Fiat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fiat
include('simpleicons-5/F/Fiat')

' renders the element
Fiat('Fiat', 'Fiat', 'an optional tech label')
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

' loads the Item which embeds the element Fiat
include('simpleicons-5/F/Fiat')

' renders the element
Fiat('Fiat', 'Fiat', 'an optional tech label')
@enduml
```

