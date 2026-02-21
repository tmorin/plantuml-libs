# Codefactor


```text
simpleicons/C/Codefactor
```

```text
include('simpleicons/C/Codefactor')
```



| Illustration | Codefactor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Codefactor.png) | ![illustration for Codefactor](../../simpleicons/C/Codefactor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodefactorXs>`
- `<$CodefactorSm>`
- `<$CodefactorMd>`
- `<$CodefactorLg>`





## Codefactor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Codefactor
include('simpleicons/C/Codefactor')

' renders the element
Codefactor('Codefactor', 'Codefactor', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Codefactor
include('simpleicons/C/Codefactor')

' renders the element
Codefactor('Codefactor', 'Codefactor', 'an optional tech label', 'an optional description')
@enduml
```

