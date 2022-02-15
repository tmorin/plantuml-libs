# Eslint


```text
simpleicons-6/E/Eslint
```

```text
include('simpleicons-6/E/Eslint')
```



| Illustration | Eslint |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Eslint.png) | ![illustration for Eslint](../../simpleicons-6/E/Eslint.Local.png) |




## Eslint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Eslint
include('simpleicons-6/E/Eslint')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Eslint
include('simpleicons-6/E/Eslint')

' renders the element
Eslint('Eslint', 'Eslint', 'an optional tech label')
@enduml
```

