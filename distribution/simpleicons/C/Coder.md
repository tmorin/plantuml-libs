# Coder


```text
simpleicons/C/Coder
```

```text
include('simpleicons/C/Coder')
```



| Illustration | Coder |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Coder.png) | ![illustration for Coder](../../simpleicons/C/Coder.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoderXs>`
- `<$CoderSm>`
- `<$CoderMd>`
- `<$CoderLg>`





## Coder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Coder
include('simpleicons/C/Coder')

' renders the element
Coder('Coder', 'Coder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coder
include('simpleicons/C/Coder')

' renders the element
Coder('Coder', 'Coder', 'an optional tech label', 'an optional description')
@enduml
```

