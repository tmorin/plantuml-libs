# Alchemy


```text
simpleicons-8/A/Alchemy
```

```text
include('simpleicons-8/A/Alchemy')
```



| Illustration | Alchemy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Alchemy.png) | ![illustration for Alchemy](../../simpleicons-8/A/Alchemy.Local.png) |




## Alchemy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Alchemy
include('simpleicons-8/A/Alchemy')

' renders the element
Alchemy('Alchemy', 'Alchemy', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Alchemy
include('simpleicons-8/A/Alchemy')

' renders the element
Alchemy('Alchemy', 'Alchemy', 'an optional tech label', 'an optional description')
@enduml
```

