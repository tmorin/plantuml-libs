# Cts


```text
simpleicons-8/C/Cts
```

```text
include('simpleicons-8/C/Cts')
```



| Illustration | Cts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Cts.png) | ![illustration for Cts](../../simpleicons-8/C/Cts.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Cts
include('simpleicons-8/C/Cts')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Cts
include('simpleicons-8/C/Cts')

' renders the element
Cts('Cts', 'Cts', 'an optional tech label', 'an optional description')
@enduml
```

