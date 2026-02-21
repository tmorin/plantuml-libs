# Gitcode


```text
simpleicons/G/Gitcode
```

```text
include('simpleicons/G/Gitcode')
```



| Illustration | Gitcode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gitcode.png) | ![illustration for Gitcode](../../simpleicons/G/Gitcode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GitcodeXs>`
- `<$GitcodeSm>`
- `<$GitcodeMd>`
- `<$GitcodeLg>`





## Gitcode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gitcode
include('simpleicons/G/Gitcode')

' renders the element
Gitcode('Gitcode', 'Gitcode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gitcode
include('simpleicons/G/Gitcode')

' renders the element
Gitcode('Gitcode', 'Gitcode', 'an optional tech label', 'an optional description')
@enduml
```

