# Eslint


```text
simpleicons-5/E/Eslint
```

```text
include('simpleicons-5/E/Eslint')
```



| Illustration | Eslint |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Eslint.png) | ![illustration for Eslint](../../simpleicons-5/E/Eslint.Local.png) |




## Eslint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Eslint
include('simpleicons-5/E/Eslint')

' renders the element
Eslint('Eslint', 'Eslint', 'an optional tech label')
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

' loads the Item which embeds the element Eslint
include('simpleicons-5/E/Eslint')

' renders the element
Eslint('Eslint', 'Eslint', 'an optional tech label')
@enduml
```

