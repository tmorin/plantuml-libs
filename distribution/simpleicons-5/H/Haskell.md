# Haskell


```text
simpleicons-5/H/Haskell
```

```text
include('simpleicons-5/H/Haskell')
```



| Illustration | Haskell |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Haskell.png) | ![illustration for Haskell](../../simpleicons-5/H/Haskell.Local.png) |




## Haskell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Haskell
include('simpleicons-5/H/Haskell')

' renders the element
Haskell('Haskell', 'Haskell', 'an optional tech label')
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

' loads the Item which embeds the element Haskell
include('simpleicons-5/H/Haskell')

' renders the element
Haskell('Haskell', 'Haskell', 'an optional tech label')
@enduml
```

