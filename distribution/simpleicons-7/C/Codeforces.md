# Codeforces


```text
simpleicons-7/C/Codeforces
```

```text
include('simpleicons-7/C/Codeforces')
```



| Illustration | Codeforces |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Codeforces.png) | ![illustration for Codeforces](../../simpleicons-7/C/Codeforces.Local.png) |




## Codeforces

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Codeforces
include('simpleicons-7/C/Codeforces')

' renders the element
Codeforces('Codeforces', 'Codeforces', 'an optional tech label')
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

' loads the Item which embeds the element Codeforces
include('simpleicons-7/C/Codeforces')

' renders the element
Codeforces('Codeforces', 'Codeforces', 'an optional tech label')
@enduml
```

