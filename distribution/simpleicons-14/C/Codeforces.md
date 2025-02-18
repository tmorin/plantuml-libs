# Codeforces


```text
simpleicons-14/C/Codeforces
```

```text
include('simpleicons-14/C/Codeforces')
```



| Illustration | Codeforces |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Codeforces.png) | ![illustration for Codeforces](../../simpleicons-14/C/Codeforces.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodeforcesXs>`
- `<$CodeforcesSm>`
- `<$CodeforcesMd>`
- `<$CodeforcesLg>`





## Codeforces

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Codeforces
include('simpleicons-14/C/Codeforces')

' renders the element
Codeforces('Codeforces', 'Codeforces', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Codeforces
include('simpleicons-14/C/Codeforces')

' renders the element
Codeforces('Codeforces', 'Codeforces', 'an optional tech label', 'an optional description')
@enduml
```

