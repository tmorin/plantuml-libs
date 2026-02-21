# Sagemath


```text
simpleicons/S/Sagemath
```

```text
include('simpleicons/S/Sagemath')
```



| Illustration | Sagemath |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sagemath.png) | ![illustration for Sagemath](../../simpleicons/S/Sagemath.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SagemathXs>`
- `<$SagemathSm>`
- `<$SagemathMd>`
- `<$SagemathLg>`





## Sagemath

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sagemath
include('simpleicons/S/Sagemath')

' renders the element
Sagemath('Sagemath', 'Sagemath', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sagemath
include('simpleicons/S/Sagemath')

' renders the element
Sagemath('Sagemath', 'Sagemath', 'an optional tech label', 'an optional description')
@enduml
```

