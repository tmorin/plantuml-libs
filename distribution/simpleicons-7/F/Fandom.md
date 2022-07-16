# Fandom


```text
simpleicons-7/F/Fandom
```

```text
include('simpleicons-7/F/Fandom')
```



| Illustration | Fandom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Fandom.png) | ![illustration for Fandom](../../simpleicons-7/F/Fandom.Local.png) |




## Fandom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Fandom
include('simpleicons-7/F/Fandom')

' renders the element
Fandom('Fandom', 'Fandom', 'an optional tech label')
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

' loads the Item which embeds the element Fandom
include('simpleicons-7/F/Fandom')

' renders the element
Fandom('Fandom', 'Fandom', 'an optional tech label')
@enduml
```

