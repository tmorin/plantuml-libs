# Cts


```text
simpleicons/C/Cts
```

```text
include('simpleicons/C/Cts')
```



| Illustration | Cts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cts.png) | ![illustration for Cts](../../simpleicons/C/Cts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CtsXs>`
- `<$CtsSm>`
- `<$CtsMd>`
- `<$CtsLg>`





## Cts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cts
include('simpleicons/C/Cts')

' renders the element
Cts('Cts', 'Cts', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cts
include('simpleicons/C/Cts')

' renders the element
Cts('Cts', 'Cts', 'an optional tech label', 'an optional description')
@enduml
```

