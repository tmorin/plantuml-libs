# Codewars


```text
simpleicons-7/C/Codewars
```

```text
include('simpleicons-7/C/Codewars')
```



| Illustration | Codewars |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Codewars.png) | ![illustration for Codewars](../../simpleicons-7/C/Codewars.Local.png) |




## Codewars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Codewars
include('simpleicons-7/C/Codewars')

' renders the element
Codewars('Codewars', 'Codewars', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codewars
include('simpleicons-7/C/Codewars')

' renders the element
Codewars('Codewars', 'Codewars', 'an optional tech label', 'an optional description')
@enduml
```

