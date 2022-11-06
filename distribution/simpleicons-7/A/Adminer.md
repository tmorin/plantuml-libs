# Adminer


```text
simpleicons-7/A/Adminer
```

```text
include('simpleicons-7/A/Adminer')
```



| Illustration | Adminer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Adminer.png) | ![illustration for Adminer](../../simpleicons-7/A/Adminer.Local.png) |




## Adminer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Adminer
include('simpleicons-7/A/Adminer')

' renders the element
Adminer('Adminer', 'Adminer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adminer
include('simpleicons-7/A/Adminer')

' renders the element
Adminer('Adminer', 'Adminer', 'an optional tech label', 'an optional description')
@enduml
```

