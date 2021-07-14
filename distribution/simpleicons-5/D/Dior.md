# Dior


```text
simpleicons-5/D/Dior
```

```text
include('simpleicons-5/D/Dior')
```



| Illustration | Dior |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dior.png) | ![illustration for Dior](../../simpleicons-5/D/Dior.Local.png) |




## Dior

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dior
include('simpleicons-5/D/Dior')

' renders the element
Dior('Dior', 'Dior', 'an optional tech label')
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

' loads the Item which embeds the element Dior
include('simpleicons-5/D/Dior')

' renders the element
Dior('Dior', 'Dior', 'an optional tech label')
@enduml
```

