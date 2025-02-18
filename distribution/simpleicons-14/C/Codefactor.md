# Codefactor


```text
simpleicons-14/C/Codefactor
```

```text
include('simpleicons-14/C/Codefactor')
```



| Illustration | Codefactor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Codefactor.png) | ![illustration for Codefactor](../../simpleicons-14/C/Codefactor.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Codefactor
include('simpleicons-14/C/Codefactor')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Codefactor
include('simpleicons-14/C/Codefactor')

' renders the element
Codefactor('Codefactor', 'Codefactor', 'an optional tech label', 'an optional description')
@enduml
```

